import threading
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import selenium.common.exceptions as sel_excepts
from bs4 import BeautifulSoup as bs
import traceback
import time
import re
from lxml.html.diff import htmldiff
from selenium.common.exceptions import WebDriverException
from exceptions import WrongDomainSyntax, DomainNoIp, ServerBlocked, SpiderError
from IPython.core.debugger import Tracer; debughere = Tracer()
from selenium.webdriver.firefox.options import Options
import operator
from functools import reduce
import urllib3
import urllib3.exceptions as urllib3_exc
import pickle
import itertools
import pprint
import uuid
import sys
import ast

from utility import eval_url, join_url, checkdir, checkfile, url_to_filename, change_useragent
from misc.settings import raas_dictconfig
from misc.settings import bcolors
import logging
from logging.config import dictConfig
import os

tag_list_link = ["a", "option","script","img"]
attr_list_link = ["href","type","src"] # action

tag_list_form = ["form"]
attr_list_form = ["action","enctype","method","name","class"]
attr_list_form_comp = ["class", "id", "name", "type", "value"]
comp_list_form = ["input","select"]

notcrawlext_list = ["epub", "pdf", "docx", "csv", "xls", "png", "jpg", "zip", "xml"]

RETS = {"too_many_requests":-5,
        "unknown_domain":-4,
        "no_crawling_extension":-3,
        "success":1}

NOT_INCLUDE = ["facebook.com","twitter.com", "instagram.com"]

return_vals_template = {"url":"",
                       "status":"",
                       "headers":"",
                       "result":"",
                       "cookies":"",
                       "page_source":"",
                       "source_path":"",
                       "screenshot_path":"",
                       "number_links":0,
                       "number_forms":0,
                       "type":"",
                       "request_type":"",
                       "from_attrib":""
                       }


pause_sleep = 60
too_many_requests_sleep = 240
page_load_timeout = 20

class Spider(threading.Thread):

    def __init__(self, env, base_dir="scrapeoutput",limit=""):
        super(Spider , self).__init__()
        self.fin = 0

        if not os.getcwd() in os.environ["PATH"]:
            os.environ["PATH"] += os.pathsep + os.getcwd()
        
        # Preparing Config and Logger
        dictConfig(raas_dictconfig)
        self.lgg = logging.getLogger("scrapespider")

        # Preparing Selenium Browser and urllib3 client
        self.br = []
        self.httpreq = urllib3.PoolManager()

        # Init some variables for runtime      
        self.last_visited= ""
        self.last_html = ""
        self.temp_count = 0

        # Prepare some Regex Variables
        self.reg_dict = {}
        self.reg_dict["login"] = r'[Ll][Oo][Gg][Ii][Nn]'
        self.reg_dict["user"] = r'[Uu]sern'
        self.reg_dict["password"] = r'[Pp]asswor[td]'
        self.logged_in = False

        if limit:
            self.limit = limit
        else:
            self.limit = 0
        self.base_dir = base_dir 

    def run(self, url, port=""):
        print("[*] Running Module: Spider ")
        self.lgg.info("[*] Running Module: Spider ")
        self.init_url(url, port)
        self.init_directories()
        while True:
            try:
                self.init_browser()
                self.collect_links_wrap(self.final_url,limit=self.limit)
                return self.finish_browser
            except ServerBlocked:
                self.lgg.exception("Got Error ServerBlocked.")
                self.store_crawler_state()
                time.sleep(3600)
            except SpiderError:
                self.lgg.exception("Got Error SpiderError.")
                self.store_crawler_state()
                time.sleep(60)


    def init_url(self, start_url, port=""):
        # Getting and evaluate Start URL
        self.start_url = start_url
        self.port = port
        base_url, base_url_dict = eval_url(self.start_url, self.port)
        self.base_ssl = base_url_dict["ssl"]
        self.base_port = base_url_dict["port"]
        self.base_url = base_url_dict["base_url"]
        self.final_url = base_url_dict["final_url"]

        #Init or loading (after exiting before finish) runtime variables that collects all desired data 
        self.thread = threading.Thread(target=self.run, args=(self.final_url))
        self.thread.deamon = True

    def init_directories(self):
        # Create directories for storing data
        self.base_dir = checkdir(self.base_dir)
        self.tool_dir = checkdir(os.path.join(self.base_dir,"spider"))
        self.session_dir = checkdir(os.path.join(self.tool_dir,url_to_filename(self.base_url)))
        self.restore_file = os.path.join(self.session_dir,"session.p")
        self.result_file = os.path.join(self.session_dir,"result.p")
        self.form_file = os.path.join(self.session_dir,"form.p")
        self.form_comps_file = os.path.join(self.session_dir,"form_comps.p")

        if os.path.exists(self.result_file):
            self.result_list = pickle.load(open(self.result_file, "rb"))
        else:
            self.result_list = []

        if os.path.exists(self.restore_file):
            self.lgg.info("We've found an session file. We will continue.")
            recover_dict = pickle.load( open(self.restore_file,"rb"))
            self.links = recover_dict.get("links","")
            self.pop_links = recover_dict.get("pop_links","")
            self.forms = recover_dict.get("forms","")
            self.form_comps = recover_dict.get("form_comps","")
            self.visited = recover_dict.get("visited","")
        else:
            self.forms = []
            self.form_comps = []
            self.links = []
            self.pop_links = []
            self.visited = []


    def init_browser(self):

        self.useragent = change_useragent()
        self.lgg.debug("Start Spider with new Useragent: {}".format(self.useragent))
        if self.br:
            self.finish_browser()
        try:
                options = Options()
                options.add_argument('--headless')
                profile = webdriver.FirefoxProfile()
                profile.set_preference("general.useragent.override", self.useragent)
                self.br = webdriver.Firefox(profile,options=options)
                self.br.set_page_load_timeout(page_load_timeout)

        except Exception as e:
            self.lgg.error(" [!] Browser object creation error: {}".format(traceback.format_exc()))


    def finish_browser(self):

        self.last_html = ""
        self.last_visited = ""
        self.br.close()
        self.br = []


    def store_crawler_state(self):

        recover_dict = {'base_url': self.base_url,
                        'links':self.links,
                        'visited':self.visited,
                        'forms':self.forms,
                        'form_comps':self.form_comps,
                        'pop_links':self.pop_links}
        pickle.dump(recover_dict, open(self.restore_file,"wb"))
        pickle.dump(self.result_list, open(self.result_file,"wb"))
        self.finish_browser()
        self.lgg.info("Spider stops. Will start again after some time.")
        return 1


    def __wait(self):
            time.sleep(0.1)

    def close(self):
            self.br.close()


    def collect_links(self,link):

        result_dict = self.get_link_wrap(link)
        if result_dict["result"] == "exit":
            return {"result":"exit"}
        result_entry = None
        if result_dict["result"] == "success":
            if result_dict["do"] == "get_slider_articles":
                result_entry = self.parse_slider_articles(result_dict)
            cs = bcolors.OKGREEN
        elif (result_dict["result"] == "no_crawling_extension"):
            cs = bcolors.OKBLUE
        else:
            cs = bcolors.HEADER

        if result_entry != None:
            print('''Returned from crawl:
                {cs}Result:{result}
                Status:{status}
                URL:{url}
                Type:{crawl_type}
                From:{from_attrib}
                Request:{request_type}{ce}'''.format(    cs=cs,
                                                    ce=bcolors.ENDC,
                                                    url=result_entry["url"],
                                                    status=result_entry["status"],
                                                    result=result_entry["result"],
                                                    crawl_type=result_entry["type"],
                                                    from_attrib=result_entry["from_attrib"],
                                                    request_type=result_entry["request_type"]))

            self.lgg.info('''Returned from crawl:
                {cs}Result:{result}
                Status:{status}
                Links:{number_links}
                Forms:{number_forms}
                URL:{url}
                Type:{crawl_type}
                From:{from_attrib}
                Request:{request_type}{ce}'''.format(    cs=cs,
                                                    ce=bcolors.ENDC,
                                                    url=result_entry["url"],
                                                    status=result_entry["status"],
                                                    result=result_entry["result"],
                                                    number_links=result_entry["number_links"],
                                                    number_forms=result_entry["number_forms"],
                                                    crawl_type=result_entry["type"],
                                                    from_attrib=result_entry["from_attrib"],
                                                    request_type=result_entry["request_type"]))
            self.result_list.append(result_entry)
        return {"result":"success"}, 

    def collect_links_wrap(self, url="",limit=0):
        link = {"link":"", "attr":"", "tag":"", "request":"GET"}
        link["link"] = "https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/aktuelles-aus-der-reserve-der-bundeswehr"
        link["do"] = "get_slider_articles"
        self.collect_links(link)

    def get_link(self,link):

        return_vals = {key:"" for key,value in return_vals_template.items()}
        return_vals["do"] = link["do"] 

        return_vals["url"] = link["link"]
        self.temp_count += 1
        return_vals["type"] = "webresource"
        self.lgg.debug("Crawl URL: {}".format(link["link"]))

        while True:
            try:
                self.br.get(link["link"])
            except sel_excepts.InvalidArgumentException:
                return_vals["result"] = "invalid_request"
                return return_vals
            except (sel_excepts.UnexpectedAlertPresentException, sel_excepts.TimeoutException): # reCAPTCHA exception
                self.lgg.exception("Got Error:")
                return_vals["result"] = "too_many_requests"
                return return_vals
            except (sel_excepts.WebDriverException): # Page Reload
                print("selenium error")
                self.lgg.exception("Got Error:")
                continue
            break

        try:
            return_vals["page_source"] = self.br.page_source
        except sel_excepts.WebDriverException:
            return_vals["page_source"] = ""
            return_vals["result"] = "bs_parsing_error"
            return return_vals
        self.last_html = return_vals["page_source"]
        return_vals["result"] = "success"
        self.last_visited = self.br.current_url
        return return_vals


    def get_link_wrap(self,link):
            try_index=0
            if self.temp_count == 30:
                self.lgg.info("Pausing for 30 seconds after 30 Requests. WAF and stuff :)")
                time.sleep(pause_sleep)
                self.temp_count = 0

            return_vals = self.get_link(link)

            temp_sleep = too_many_requests_sleep
            try_counter = 0
            while return_vals["result"] == "too_many_requests":
                self.lgg.info("Too many requests. Will rest for {} seconds".format(temp_sleep))
                time.sleep(temp_sleep)
                self.init_browser()
                return_vals = self.get_link(link)
                temp_sleep += 300
                try_counter += 1
                if try_counter == 5:
                    self.lgg.info("We got blocked by the web server. Saving state and exiting.")
                    raise ServerBlocked
            else:
                return return_vals



    def parse_slider_articles(self, result_dict):

        button = self.br.find_elements_by_xpath("//button[@data-js-item='load-more-btn']")
        ac.move_to_element(button[0]).click().perform()
        soup.find_all("div",{"class":"teaser-collage__teaser-wrapper"})
        if result_dict['page_source']:
            bsoup = self.parse_html_to_bs(result_dict['page_source'])
            debughere()
            result = bsoup.find_all("a",{"class":"slider__list"}) 
            print(result)


    def check_visit(self, new_link, request):
        if not any(vis["link"] == new_link for vis in self.visited):
            return True
        else:
            return False



    def check_dup_link(self, new_link):
        if not any((link["link"] == new_link["link"]) & \
                  (link["request"] == new_link["request"]) for link in self.links):
            return True
        else:
            return False



    def extract_html_get_form(self, inputdata, tagkeys, attrkeys):
        number_forms = 0
        new_form_list, new_comps_list = self.gen_input_attr_form(inputdata, tagkeys, attrkeys)
        for new_form, new_comps in zip(new_form_list, new_comps_list):
            new_form["link"] = self.eval_link(new_form["action"])
            if new_form["method"] == '':
                new_form["method"] = 'get'
            number_forms += self.add_form(new_form, new_comps)

        return number_forms


    def extract_html_get_link(self, inputdata, attrkeys):
        number_links = 0
        for link in self.gen_input_attr_raw(inputdata, attrkeys):
            link["link"] = self.eval_link(link["link"])
            link["request"] = "get"

            number_links += self.add_link(link)

        return number_links


    def eval_link(self, link):
        new_link = ""
        if (self.base_url in link):
            if link.startswith("//"):
                new_link = join_url(self.base_ssl+":",link, urleval=True)
            elif any(s in link for s in NOT_INCLUDE):
                new_link = ""
            elif link.startswith("http"):
                new_link = join_url(link,urleval=True)

        elif (link.startswith("/")) and not (link.startswith("//")):
            new_link = join_url(self.start_url, link, urleval=True)

        elif (link.startswith("#")) and not \
             (self.last_visited.endswith("#")) and not \
             (self.last_visited.count("#") > 0):
            new_link = join_url(self.last_visited,link,urleval=True)
            new_link = ""

        return new_link

    def check_link(self,link_string):
        try:
            eval_url(link_string)
            return True
        except:
            return False

    def parse_html_to_bs(self,data):
        try:
            temp_bs = bs(data,"lxml")
        except Exception as e:
            self.lgg.exception("ERROR in BeautifulSoup Parser:")
            return None
        return temp_bs


if __name__ == "__main__":
    # bundeswehr.de spider
    spider = Spider(env="",limit=10)
    spider.run(url="https://bundeswehr.de/reserve")
