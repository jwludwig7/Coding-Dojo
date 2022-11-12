from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
from flask_app.models import user_model

class Sighting:
    def __init__(self, data):
        self.id = data['id']
        self.location = data['location']
        self.what_happened = data['what_happened']
        self.date = data['date']
        self.num_of = data['num_of']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO sightings (location, what_happened, date, num_of, user_id) VALUES (%(location)s, %(what_happened)s, %(date)s, %(num_of)s, %(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM sightings JOIN users on sightings.user_id = users.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) > 0:
            all_sightings = []
            for row_in_db in results:
                this_sighting = cls(row_in_db)
                user_data = {
                    **row_in_db,
                    'id': row_in_db['users.id'],
                    'created_at': row_in_db['users.created_at'],
                    'updated_at': row_in_db['users.updated_at'],                    
                }
                this_user = user_model.User(user_data)
                this_sighting.planner = this_user
                all_sightings.append(this_sighting)
            return all_sightings
        return []

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM sightings JOIN users ON sightings.user_id = users.id WHERE sightings.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 1:
            return False
        row_in_db = results[0]
        for row_in_db in results:
            this_sighting = cls(row_in_db)
            user_data = {
                ** row_in_db,
                'id': row_in_db['users.id'],
                'created_at': row_in_db['users.created_at'],
                'updated_at': row_in_db['users.updated_at'],
            }
            this_user = user_model.User(user_data)
            this_sighting.planner = this_user
            return this_sighting

    @classmethod
    def update(cls,data):
        query = "UPDATE sightings SET location = %(location)s, what_happened = %(what_happened)s, date = %(date)s, num_of = %(num_of)s WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM sightings WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validator(form_data):
        is_valid = True
        # if len(form_data['name']) < 1:
        #     flash("name is required")
        #     is_valid = False
        if len(form_data['location']) < 1:
            flash("location is required")
            is_valid = False
        if len(form_data['what_happened']) < 1:
            flash("What Happened is required")
            is_valid = False
        if len(form_data['date']) < 1:
            flash("date is required")
            is_valid = False
        if len(form_data['num_of']) < 1:
            flash("Number of Sammmsquanches required")
            is_valid = False
        return is_valid

