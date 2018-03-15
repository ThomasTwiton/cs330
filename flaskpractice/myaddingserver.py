from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)

@app.route('/adder') 
def sumtwo():
    add1 = int(request.args.get("num1")) #request.args['num1']
    add2 = int(request.args.get("num2"))
    mysum = add1 + add2
    #res = Response(json.dumps(mysum))
    #res.headers = {'Content-Type':'application/json'}
    #return res
    return jsonify(add1+add2)

app.run(debug=True, port=5001)