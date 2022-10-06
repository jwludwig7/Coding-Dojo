from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojos_model import Dojos


@app.route('/')
def index():
    return redirect('/dojos')

@app.route('/dojos')
def dojos():
    return render_template("dojos.html", dojos=Dojos.get_all())

@app.route('/dojos/new')
def new():
    return render_template("dojos_new.html")

@app.route('/dojos/create', methods=['POST'])
def create():
    print(request.form)
    Dojos.new_dojo(request.form)
    return redirect('/dojos')

@app.route('/dojos/show/<int:id>')
def show(id):
    data={
        "id": id
    }
    dojo= Dojos.show_one(data)
    return render_template("show_dojos.html", dojo=dojo)


