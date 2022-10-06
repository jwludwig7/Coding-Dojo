from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = "password is password"

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['student_id'] = request.form['student_id']
    session['strawberry'] = request.form['strawberry']
    session['raspberry'] = request.form['raspberry']
    session['apple'] = request.form['apple']
    session['blackberry'] = request.form['blackberry']
    print(request.form)
    return redirect("/checking/out")

@app.route('/checking/out')
def checking_out():
    count = int(session['strawberry']) +int(session['raspberry'])+int(session['apple'])+int(session['blackberry'])
    print(f"Charging {session['first_name']} for {count} fruits")
    return render_template('checkout.html', count=count)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True) 