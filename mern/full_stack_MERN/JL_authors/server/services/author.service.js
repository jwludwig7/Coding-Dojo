const {Author} = require("../models/Author.model");

const createAuthor = async (data) => {
    console.log('service: createAuthor');
    const author = await Author.create(data);
    return author;
}

const getAllAuthors = async () => {
    console.log('service: getAllAuthors');
    const authors = await Author.find();
    return authors;
}

const getAuthorById = async (id) => {
    console.log('service: getAuthorById');
    const author = await Author.findById(id);
    return author;
}

const deleteAuthorById = async (id) => {
    console.log('service: deleteAuthorById');
    const author = await Author.findByIdAndDelete(id);
    return author;
}

const getAuthorByIdAndUpdate = async (id,data) => {
    console.log('service: getAuthorByIdAndUpdate');
    const author = await Author.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated Author.
        new:true
    });
    return author;
}

module.exports = {
    createAuthor: createAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    getAuthorByIdAndUpdate,
};