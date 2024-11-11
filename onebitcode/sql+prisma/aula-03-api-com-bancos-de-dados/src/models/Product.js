const { query } = require("../database/index")

class Product {
    constructor(productRow) {
        this.id = productRow.id
        this.name = productRow.name
        this.description = productRow.description
        this.price = +productRow.price
        this.stockQuantity = productRow.stock_quantity
        this.isActive = productRow.is_active
        this.createdAt = new Date(productRow.created_at)
        this.updatedAt = new Date(productRow.updated_at)
    }

    static async findAll() {
        const result = await query(`SELECT * FROM products;`)
        return result.rows.map((row) => new Product(row))
    }

    static async create({ name, description, price, stockQuantity, isActive }) {
        await query(`
            INSERT INTO products (name, description, price, stock_quantity, is_active)
            VALUES ($1, $2, $3, $4, $5)
        `, [name, description, price, stockQuantity, isActive])
    }
}

module.exports = Product