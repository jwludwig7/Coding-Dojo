from flask import Flask
app = Flask(__name__)
app.secret_key = "password is password"
DATABASE = "books_schema"
