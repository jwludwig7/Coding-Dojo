from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
from flask_app.models import user_model

# class that is defined from the db
class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date = data['date']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

# this class method is used to create a new recipe and insert it into the db
    @classmethod
    def create(cls,data):
        query = "INSERT INTO recipes (name, description, instructions, date, under_30, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date)s, %(under_30)s, %(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query,data)

# this class method is used to get all recipes
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) > 0:
            all_recipes = []
            for row_in_db in results:
                this_recipe = cls(row_in_db)   
                user_data = {
                    **row_in_db,
                    'id': row_in_db['users.id'],
                    'created_at': row_in_db['users.created_at'],
                    'updated_at': row_in_db['users.updated_at'],
                }
                this_user = user_model.User(user_data)
                this_recipe.planner = this_user
                all_recipes.append(this_recipe)
            return all_recipes
        return []

# this class mathod gets all the recipes by id from db, 
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) > 1:
            return False
        row_in_db = results[0]
        for row_in_db in results:
            this_recipe = cls(row_in_db)   
            user_data = {
                **row_in_db,
                'id': row_in_db['users.id'],
                'created_at': row_in_db['users.created_at'],
                'updated_at': row_in_db['users.updated_at'],
            }
            this_user = user_model.User(user_data)
            this_recipe.planner = this_user
            return this_recipe

# this class method allows user to update their recipes
    @classmethod
    def update(cls,data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date = %(date)s, under_30 = %(under_30)s WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

# this class method allows users to delete their recipe
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)


# static method used for froms related to recipes, if these are not hit we will not be able to submit form
    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['name']) < 1:
            flash("name is required")
            is_valid = False
        if len(form_data['description']) < 1:
            flash("description is required")
            is_valid = False
        if len(form_data['instructions']) < 1:
            flash("instructions is required")
            is_valid = False
        if len(form_data['date']) < 1:
            flash("date is required")
            is_valid = False
        if "under_30" not in form_data:
            flash("Under 30 Minutes is required")
            is_valid = False
        return is_valid
        