from flask import Flask, request, render_template

app = Flask(__name__)
current_n = 0
d = {}
d['first_name'] = 'Potato'
d['last_name'] = 'Lord'

@app.route('/')
def hello():
    #return render_template('index.htlm', person="Potato Lord")
    return render_template('index.html', 
        vars=d,
        num_list=arrayOdd(current_n)
    )

@app.route('/proccessform')
def procform():
    my_dict= request.args
    print(my_dict)
    my_dict.to_dict
    try:
        current_n = int(my_dict["num_toprint"])
    except:
        current_n = 0
    d['first_name'] = my_dict["first_name"]
    d['last_name'] = my_dict["last_name"]
    return render_template('index.html',
        vars=d,
        num_list=arrayOdd(current_n) 
    )

def arrayOdd(n):
    my_odds = []
    for i in range (0, n):
        my_odds.append(2*i+1)
    return my_odds

if __name__=='__main__':
    app.run(debug=True)