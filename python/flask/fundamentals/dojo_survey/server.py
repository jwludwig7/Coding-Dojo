from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)   
app.secret_key = "the password is password"

@app.route('/')         
def hello_world():
    if 'been_there' not in session:
        session['been_there'] = True
    return render_template("index.html")


@app.route('/form', methods=['POST'])
def form():
    session['name'] = request.form['name']
    session['dojo_location'] = request.form['dojo_location']
    session['fav_lang'] = request.form['fav_lang']
    session['comments'] = request.form['comments']
    return redirect('/results')

@app.route('/results')
def results():
    return render_template("results.html")

@app.route('/goback', methods=["POST"])
def go_back():
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)   