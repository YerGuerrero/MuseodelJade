import flask
from flask_cors import CORS
from flask import jsonify, request
import psycopg2 

app = flask.Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True

@app.route('/get_news', methods=['GET'])
def get_news():
    meta = get_news()
    response = jsonify(meta)
    return response

@app.route('/get_events', methods=['GET'])
def get_events():
    meta = get_event()
    response = jsonify(meta)
    return response

@app.route('/get_exhibitions', methods=['GET'])
def get_exhibitions():
    meta = get_exhibition()
    response = jsonify(meta)
    return response

@app.route('/get_artWorks', methods=['GET'])
def get_artWorks():
    meta = get_artWorks()
    response = jsonify(meta)
    return response

@app.route('/get_tours', methods=['GET'])
def get_tours():
    meta = get_tours()
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

def get_event():
    sql = """SELECT id, titulo, descripcion, fecha, hora, imagen
	FROM public.eventos;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

def get_exhibition():
    sql = """SELECT id, titulo, descripcion, imagen, tipo
	FROM public.exhibiciones;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

def get_artWorks():
    sql = """SELECT id, titulo, descripcion, imagen, id_exhibicion
	FROM public.obra;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

def get_tours():
    sql = """SELECT id, titulo, descripcion, urltour, imagen
 FROM public.tourvirtual;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

if __name__ == '__main__':
    app.run(host="localhost", port="5000")