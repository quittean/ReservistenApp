#!/usr/bin/python
# coding: utf-8
from flask import Flask, Blueprint, jsonify
from sqlalchemy import create_engine
import pandas as pd




bp = Blueprint('diasterresponse', __name__)

app = Flask(__name__)

@bp.route('/getarticles')
def getarticles():
    engine = create_engine('sqlite:///scrapeoutput/bwscrape.db')
    df = pd.read_sql_table('bwde_articles', engine)

    return jsonify(df.to_json(orient="index"))

app = Flask(__name__)
app.register_blueprint(bp, url_prefix='/resbw')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6050, debug=False)
