from flask_app import app
from flask import redirect, render_template,request
from flask_app.models.authors_model import Authors
from flask_app.models.books_models import Books

@app.route('/books')
def books():
    return render_template('books.html', all_books=Books.get_all() )

@app.route('/create/book', methods=['POST'])
def create_book():
    data = {
        "title":request.form['title'],
        "num_of_pages": request.form['num_of_pages']
    }
    book_id = Books.save(data)
    return redirect('/books')

@app.route('/book/<int:id>')
def show_book(id):
    data = {
        "id":id
    }
    return render_template('show_book.html', book=Books.get_by_id(data), unfavorited_authors=Authors.unfavorited_authors(data))

@app.route('/join/author', methods=['POST'])
def join_author():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Authors.add_favorite(data)
    return redirect(f"/book/{request.form['book_id']}")