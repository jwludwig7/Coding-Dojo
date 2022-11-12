from flask_app.config.mysqlconnections import connectToMySQL
from flask_app import DATABASE


class Authors:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorite_books = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_authors = []
        for row_from_db in results:
            # user_instace = cls(row_from_db)
            all_authors.append(cls(row_from_db))
        return all_authors

    @classmethod
    def new_author(cls, data):
        query = "INSERT INTO authors (name) VALUES (%(name)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def unfavorited_authors(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN ( SELECT author_id FROM favorites WHERE book_id = %(id)s );"
        authors = []
        results = connectToMySQL(DATABASE).query_db(query,data)
        for row_from_db in results:
            authors.append(cls(row_from_db))
        return authors

    @classmethod
    def add_favorite(cls,data):
        query = "INSERT INTO favorites (author_id,book_id) VALUES (%(author_id)s,%(book_id)s);"
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def show_one(cls,data):
        from flask_app.models.books_models import Books
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        print(result)

        author = cls(result[0])
        
        for row_from_db in result:
            if row_from_db['books.id'] == None:
                break

            book_data = {
                'id': row_from_db['books.id'],
                'title' : row_from_db['title'],
                'num_of_pages' : row_from_db['num_of_pages'],
                'created_at' : row_from_db['books.created_at'],
                'updated_at' : row_from_db['books.updated_at'],
            }
            author.favorite_books.append(Books(book_data))
        return author
   
        
