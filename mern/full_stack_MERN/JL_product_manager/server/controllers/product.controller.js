const {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    getProductByIdAndUpdate,
} = require('../services/product.service');


const handleCreateProduct = async (req, res) => {
    console.log('controller: handleCreateProduct req.body:', req.body);
    try {
        const product = await createProduct(req.body);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllProducts = async (req, res) => {
    console.log('controller: handleGetAllProducts');
    try {
        const products = await getAllProducts();
        return res.json(products)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetProductById = async (req, res) => {
    console.log('controller: handleGetProductById req.params: ', req.params.id);
    try {
        const product = await getProductById(req.params.id);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteProductById = async (req, res) => {
    console.log('controller: handleDeleteProductById req.params: ', req.params.id);
    try {
        const product = await deleteProductById(req.params.id);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateProductById = async (req, res) => {
    console.log('controller: handleUpdateProductById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const product = await getProductByIdAndUpdate(req.params.id, req.body);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}




module.exports = {
    handleCreateProduct: handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById
}