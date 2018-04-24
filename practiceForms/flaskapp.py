from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    d = {}
    d['first_name'] = 'Potato'
    d['last_name'] = 'Lord'
    #return render_template('index.htlm', person="Potato Lord")
    return render_template('index.html', 
        vars=d,
        num_list=[1,3,5,7,9,11,13]
    )

if __name__=='__main__':
    app.run(debug=True)