from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user_model import User
from flask_app.models.sighting_model import Sighting


@app.route('/sightings/new')
def new_sighting_form():
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    return render_template("sighting_new.html", logged_user=logged_user)

@app.route('/sightings/create', methods=['POST'])
def create_sighting():
    if 'user_id' not in session:
        return redirect('/')
    if not Sighting.validator(request.form):
        return redirect('/sightings/new')
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    Sighting.create(data)
    return redirect('/dashboard')

@app.route('/sightings/<int:id>')
def one_sighting(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    this_sighting = Sighting.get_by_id({'id':id})
    logged_user = User.get_by_id(user_data)
    return render_template('sighting_one.html', this_sighting = this_sighting, logged_user=logged_user )

@app.route('/sightings/<int:id>/edit')
def edit_sighting(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)    
    this_sighting = Sighting.get_by_id({'id':id})
    return render_template('sighting_edit.html', this_sighting = this_sighting, logged_user=logged_user)

@app.route('/sightings/<int:id>/update', methods=['POST'])
def update_sighting(id):
    if not Sighting.validator(request.form):
        return redirect(f"/sightings/{id}/edit")
    sighting_data = {
        **request.form,
        'id': id,
    }
    Sighting.update(sighting_data)
    return redirect('/dashboard')

@app.route('/sightings/<int:id>/delete')
def delete_sighting(id):
    this_sighting = Sighting.get_by_id({'id':id})
    if not this_sighting.user_id == session['user_id']:
        flash("NAUGHTY NAUGHTY NAUGHTY!!!!!")
        return redirect('/dashboard')
    Sighting.delete({'id':id})
    return redirect('/dashboard')
