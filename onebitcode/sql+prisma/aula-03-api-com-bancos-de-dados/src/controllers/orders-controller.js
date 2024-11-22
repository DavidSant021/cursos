const Order = require("../models/Order")

const ordersController = {
    // GET /orders
    index: async (req, res) => {
        const orders = await Order.findAll()
        res.json(orders)
    },

    // POST /orders
    create: async (req, res) => {
        const newOrder = await Order.create(
            req.body.customerId,
            req.body.products // Array<{ id: number, quantity: number }>
        )

        if (newOrder instanceof Order) {
            res.status(201).json(newOrder)
        } else {
            res.status(400).json(newOrder)
        }
    },

    // GET /orders/:id
    show: async (req, res) => {
        const order = await Order.findById(req.params.id)
        res.json(order)
    },

    // DELETE /orders/:id
    delete: async (req, res) => {
        const result = await Order.delete(req.params.id)
        res.json(result)
    }
}

module.exports = ordersController