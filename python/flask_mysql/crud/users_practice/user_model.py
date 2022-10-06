from mysqlconnections import connectToMySQL
DATABASE = "users_practice_assignment"
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_users = []
        for row_from_db in results:
            # user_instace = cls(row_from_db)
            all_users.append(cls(row_from_db))
        return all_users

    @classmethod
    def new_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s,%(last_name)s, %(email)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result