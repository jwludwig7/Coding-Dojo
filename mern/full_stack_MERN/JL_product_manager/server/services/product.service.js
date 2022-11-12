const {Product} = require("../models/Product.model");

const createProduct = async (data) => {
    console.log('service: createProduct');
    const product = await Product.create(data);
    return product;
}

const getAllProducts = async () => {
    console.log('service: getAllProducts');
    const products = await Product.find();
    return products;
}

const getProductById = async (id) => {
    console.log('service: getProductById');
    const product = await Product.findById(id);
    return product;
}

const deleteProductById = async (id) => {
    console.log('service: deleteProductById');
    const product = await Product.findByIdAndDelete(id);
    return product;
}

const getProductByIdAndUpdate = async (id,data) => {
    console.log('service: getProductByIdAndUpdate');
    const product = await Product.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated Product.
        new:true
    });
    return product;
}

module.exports = {
    createProduct: createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    getProductByIdAndUpdate,
};