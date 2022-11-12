from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user_model import User
from flask_app.models.recipe_model import Recipe

# this route route allows users to create new recipe, take them to the proper html
@app.route('/recipes/new')
def new_recipe_form():
    return render_template("recipe_new.html")

# this app route is the post method and makes sure the form is valid and the user is indeed in session
@app.route('/recipes/create', methods=['POST'])
def create_recipe():
    if 'user_id' not in session:
        return redirect('/')
    if not Recipe.validator(request.form):
        return redirect('/recipes/new')
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    Recipe.create(data)
    return redirect('/dashboard')

# this allows the user so veiw one recipe, checks their sesison, makes sure that the user is attached to this recipe as well
@app.route('/recipes/<int:id>')
def one_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    user_data = {
        'id': session['user_id']
    }
    this_recipe = Recipe.get_by_id({'id': id})
    logged_user = User.get_by_id(user_data)
    return render_template("recipe_one.html", this_recipe=this_recipe, logged_user=logged_user)

# this app route allows users to edit their own recipe, also renders the edit form or the update class method
@app.route('/recipes/<int:id>/edit')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    this_recipe = Recipe.get_by_id({'id':id})
    return render_template('recipe_edit.html', this_recipe=this_recipe)

# this is the post route for the edit method, once done redirect to the dashboard, checks to make sure the form is valid
@app.route('/recipes/<int:id>/update', methods=['POST'])
def update_recipe(id):
    if not Recipe.validator(request.form):
        return redirect(f"/recipes/{id}/edit")
    recipe_data = {
        **request.form,
        'id': id
    }
    Recipe.update(recipe_data)
    return redirect('/dashboard')


# this app route allows users to delete their own recipes, also added so other users can delete other users recipes will have flash message
@app.route('/recipes/<int:id>/delete')
def delete_recipe(id):
    this_recipe = Recipe.get_by_id({'id':id})
    if not this_recipe.user_id == session['user_id']:
        flash("NAUGHTY NAUGHTY NAUGHTY!!!!!")
        return redirect('/dashboard')
    Recipe.delete({'id':id})
    return redirect('/dashboard')
