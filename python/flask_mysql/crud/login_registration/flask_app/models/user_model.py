from flask_app.config.mysqlconnection import connectToMySQL
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask import flash
from flask_app import DATABASE
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# inserting the class of User, all the data from the DB
class User:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.password = data['password']

# create a new user into the database
    @classmethod
    def create(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db(query,data)

# this is to be able to see the email that was just entered
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 0:
            return cls(results[0])
        return False

# making sure that the info being inputed is valid
    @staticmethod
    def validator(potential_user):
        is_valid = True
        if len(potential_user['first_name']) < 1:
            flash("First name is required", "reg")
            is_valid = False
        if len(potential_user['last_name']) < 1:
            flash("Last name is required", "reg")
            is_valid = False
        if len(potential_user['email']) < 1:
            flash("Email is required", "reg")
            is_valid = False
        elif not EMAIL_REGEX.match(potential_user['email']):
            flash("Email must be valid","reg")
            is_valid = False
        else:
            data = {
                'email': potential_user['email']
            }
            user_in_db = User.get_by_email(data)
            if user_in_db:
                flash("Email already registered", "reg")
                is_valid = False
        if len(potential_user['password']) < 7:
            flash("Password must be 7 characters", "reg")
            is_valid = False
        elif potential_user['password'] != potential_user['confirm_pass']:
            flash("Check ya password so that it lines up!!", "reg")
            is_valid = False
        return is_valid

        

