from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.authors_model import Authors
from flask_app.models.books_models import Books



@app.route('/')
def index():
    return redirect('/authors')

@app.route('/authors')
def authors():
    all_authors=Authors.get_all()
    return render_template("authors.html", all_authors=all_authors )

@app.route('/authors/new', methods=['POST'])
def create():
    data = {
        "name": request.form['name']
    }   
    Authors.new_author(data)
    return redirect('/')

@app.route('/authors/<int:id>')
def show(id):
    data={
        "id": id
    }
    author= Authors.show_one(data)
    return render_template("show_author.html", author=author, unfavorited_books=Books.unfavorited_books(data))

@app.route('/join/book', methods=['POST'])
def join_book():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Authors.add_favorite(data)
    return redirect(f"/authors/{request.form['author_id']}")
