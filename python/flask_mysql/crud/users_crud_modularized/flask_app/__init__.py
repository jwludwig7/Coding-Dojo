from flask import Flask
app = Flask(__name__)
app.secret_key = "password is password"
DATABASE = "users_practice_assignment"
