from flask_app.config.mysqlconnections import connectToMySQL
from flask_app import DATABASE
from flask_app.models.authors_model import Authors

class Books:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.authors_who_favorited = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        books = []
        results = connectToMySQL(DATABASE).query_db(query)
        for row_from_db in results:
            books.append(cls(row_from_db))
        return books

    @classmethod
    def save(cls,data):
        query = "INSERT INTO books (title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s);"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON authors.id = favorites.author_id WHERE books.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)

        book = cls(results[0])

        for row_from_db in results:
            if row_from_db['authors.id'] == None:
                break
            author_data = {
                "id": row_from_db["authors.id"],
                "name": row_from_db["name"],
                "created_at" : row_from_db["authors.created_at"],
                "updated_at" : row_from_db["authors.updated_at"]
            }
            book.authors_who_favorited.append(Authors(author_data))
        return book

    @classmethod
    def unfavorited_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN ( SELECT book_id FROM favorites WHERE author_id = %(id)s );"
        results = connectToMySQL(DATABASE).query_db(query,data)
        books = []
        for row_from_db in results:
            books.append(cls(row_from_db))
        print(books)
        return books

