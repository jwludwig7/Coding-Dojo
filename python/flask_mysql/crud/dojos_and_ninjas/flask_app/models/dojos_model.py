from flask_app.config.mysqlconnections import connectToMySQL
from flask_app import DATABASE
from flask_app.models import ninjas_model

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
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def show_one(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        print(result)
        if result:
            dojos_instance = cls(result[0])
            ninjas_list = []
            for row_from_db in result:
                ninja_data = {
                    'id': row_from_db['ninjas.id'],
                    'first_name' : row_from_db['first_name'],
                    'last_name' : row_from_db['last_name'],
                    'age' : row_from_db['age'],
                    'created_at' : row_from_db['ninjas.created_at'],
                    'updated_at' : row_from_db['ninjas.updated_at'],
                    'dojo_id' : row_from_db['dojo_id'],
                }
                ninja_instance = ninjas_model.Ninjas(ninja_data)
                ninjas_list.append(ninja_instance)
            dojos_instance.ninjas = ninjas_list
            return dojos_instance
        return result


