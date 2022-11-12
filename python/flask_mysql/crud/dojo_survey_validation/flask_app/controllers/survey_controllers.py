from flask import render_template,request, redirect, session
from flask_app import app
from flask_app.models.survey_model import Survey



@app.route('/')         
def hello_world():
    if 'been_there' not in session:
        session['been_there'] = True
    return render_template("index.html")


@app.route('/form', methods=['POST'])
def form():
    if Survey.is_valid(request.form):
        Survey.save(request.form)
        return redirect('/results')
    return redirect('/')

@app.route('/results')
def results():
    return render_template("results.html", survey = Survey.get_last_survey())

@app.route('/goback', methods=["POST"])
def go_back():
    return redirect('/')
