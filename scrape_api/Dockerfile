FROM python:3.7.6-buster

RUN useradd -m scraper
USER scraper

WORKDIR /home/scraper
RUN git clone https://github.com/Petefish88/ReservistenApp.git
WORKDIR /home/scraper/ReservistenApp/scrape_api/

USER root
RUN pip install -r requirements.txt

USER scraper

ENV ENVIRONMENT production

USER root
RUN chmod +x docker-entrypoint.sh && cp docker-entrypoint.sh /usr/local/bin/ 

ENTRYPOINT ["docker-entrypoint.sh"]
