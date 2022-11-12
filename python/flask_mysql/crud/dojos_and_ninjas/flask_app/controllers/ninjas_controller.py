from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojos_model import Dojos
from flask_app.models.ninjas_model import Ninjas



@app.route('/ninjas/new')
def new_ninja():
    dojos=Dojos.get_all()
    return render_template("ninjas_new.html", dojos=dojos)

@app.route('/ninjas/create', methods=['POST'])
def created_ninja():
    Ninjas.new_user(request.form)
    return redirect("/")

