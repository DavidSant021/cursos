const Product = require("../models/Product")

const productsController = {
    // GET /products
    index: async (req, res) => {
        const products = await Product.findAll()
        res.json(products)
    },

    // POST /products
    create: async (req, res) => {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    },

    //GET /products/:id
    show: async (req, res) => {
        
    },

    //PUT /products/:id
    update: async (req, res) => {
        
    },

    //DELETE /products/:id
    delete: async (req, res) => {
        
    }
}

module.exports = productsController