from flask import Flask, render_template, request, redirect, session 
import random

app = Flask(__name__)  

app.secret_key = "password is password"


@app.route('/')         
def num_game():
    if "num" not in session:
        session['num'] = random.randint(1,100)

    return render_template("index.html")


@app.route('/check', methods=["POST"])
def check_input_val():
    session['check'] = int(request.form['check'])
    return redirect('/')

@app.route("/reset")
def reset():
    session.clear()
    return redirect('/')



if __name__=="__main__":     

    app.run(debug=True)   

