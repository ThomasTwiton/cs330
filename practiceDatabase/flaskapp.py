from flask import Flask, request, render_template
from flask_bootstrap import Bootstrap
#import psycopg2
import sqlite3

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def form():
    #conn = psycopg2.connect("postgresql://twitth01:@localhost:2345/world")
    conn = sqlite3.connect("country.db")
    cur = conn.cursor()
    cur.execute("select distinct continent from country")
    res = cur.fetchall()
    print(res)
    return render_template('form.html', dropdown = res)

@app.route('/processform')
def index():
    #conn = psycopg2.connect(user = "twitth01", host="knuth.luther.edu", dbname="world")
    conn = sqlite3.connect("country.db")
    continent = request.args['continent']
    continent = "'" + continent + "'"
    cur = conn.cursor()
    cur.execute("select * from country where continent = " + continent)
    res = cur.fetchall()
    return render_template('index.html', data= res, theader=cur)

if __name__=='__main__':
    app.run(debug=True)