from flask_app.config.mysqlconnections import connectToMySQL
from flask_app import DATABASE

class Dojos:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        for row_from_db in results:
            # user_instace = cls(row_from_db)
            all_dojos.append(cls(row_from_db))
        return all_dojos

    @classmethod
    def new_dojo(cls, data):
        query = "INSERT INTO name (name) VALUES (%(name)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def show_one(cls,data):
        query = "SELECT * FROM dojos WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
