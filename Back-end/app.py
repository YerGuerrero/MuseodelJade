import flask
from flask_cors import CORS
import json
from flask import jsonify, request
import psycopg2 
import os

app = flask.Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True

@app.route('/get_news', methods=['GET'])
def get_news():
    meta = get_news()
    response = jsonify(meta)
    return response

dbconn = {'database': 'museojadedb',
          'user': 'admin',
          'port': '5432',
          'host':'localhost',
          'password':'museoJadeAdmin'}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()

def get_news():
    sql = """SELECT id, titulo, imagen, descripcion
	FROM public.noticias;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

if __name__ == '__main__':
    app.run(host="localhost", port="5000")