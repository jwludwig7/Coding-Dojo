const {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    getAuthorByIdAndUpdate,
} = require('../services/author.service');


const handleCreateAuthor = async (req, res) => {
    console.log('controller: handleCreateAuthor req.body:', req.body);
    try {
        const author = await createAuthor(req.body);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllAuthors = async (req, res) => {
    console.log('controller: handleGetAllAuthors');
    try {
        const authors = await getAllAuthors();
        return res.json(authors)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAuthorById = async (req, res) => {
    console.log('controller: handleGetAuthorById req.params: ', req.params.id);
    try {
        const author = await getAuthorById(req.params.id);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteAuthorById = async (req, res) => {
    console.log('controller: handleDeleteAuthorById req.params: ', req.params.id);
    try {
        const author = await deleteAuthorById(req.params.id);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateAuthorById = async (req, res) => {
    console.log('controller: handleUpdateAuthorById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const author = await getAuthorByIdAndUpdate(req.params.id, req.body);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}




module.exports = {
    handleCreateAuthor: handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleDeleteAuthorById,
    handleUpdateAuthorById
}