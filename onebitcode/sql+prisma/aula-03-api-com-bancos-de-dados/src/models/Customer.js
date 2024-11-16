const { query } = require("../database/index")

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    static async findAll() {
        const result = await query(`SELECT * FROM customers;`)
        return result.rows.map((row) => new Customer(row))
    }

    static async findById(id) {
        const result = await query(`
            SELECT * FROM customers WHERE id = $1
        `, [id])

        if (!result.rows[0]) return null

        return new Customer(result.rows[0])
    }

    static async create(attributes) {
        const customerExists = await query(`SELECT * FROM customers WHERE email = $1;`, [attributes.email])

        if (customerExists.rows[0]) throw new Error("Email already in use!")

        const result = await query(`
            INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *;
        `, [attributes.name, attributes.email])

        return new Customer(result.rows[0])
    }

    static async update(id, newAttributes) {
        const results = await query(`SELECT * FROM customers WHERE id = $1;`, [id])

        if (!results.rows[0]) return null

        const customer = new Customer(results.rows[0])

        Object.assign(customer, newAttributes)
        customer.updatedAt = new Date()

        await query(`UPDATE customers SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3;`, [customer.name, customer.email, customer.id])

        return customer
    }

    static async delete(id) {
        const result = await query(`DELETE FROM customers WHERE id = $1;`, [id])

        if (!result.rows[0]) return null

        return new Customer(result.rows[0])
    }

}

module.exports = Customer