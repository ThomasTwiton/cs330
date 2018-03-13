from flask import Flask, Response
import random, json

app = Flask(__name__)

@app.route('/getnum') #decorator, makes /getnum a key in a dictionary for anyname
def anyname():
    res = Response(json.dumps({'number':random.randrange(100)}))
    #res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Content-type'] = 'application/json'
    return res

@app.route('/hello')
def hello():
    return "<h1>Hellow World</h1>"

app.run(debug=True, port=5001)