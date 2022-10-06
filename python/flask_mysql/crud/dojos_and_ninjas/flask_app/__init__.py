from flask import Flask
app = Flask(__name__)
app.secret_key = "password is password"
DATABASE = "dojos_and_ninjas_shema"
