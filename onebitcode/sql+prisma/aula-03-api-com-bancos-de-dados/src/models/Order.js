const { query, getClient } = require("../database/index");
const Product = require("./Product");

class Order {
    constructor(orderRow, populateCustomer, populateProducts) {
        this.id = orderRow.id;
        this.customerId = orderRow.customer_id;
        this.total = +orderRow.total;
        this.createdAt = new Date(orderRow.created_at);
        this.updatedAt = new Date(orderRow.updated_at);

        // dessa vez nosso construtor incluirá a possibilidade de
        // popular propriedades com dados das tabelas associadas
        this.customer = undefined;
        if (populateCustomer) {
            this.customer = populateCustomer;
        }
        this.orderProducts = undefined;
        if (populateProducts) {
            this.orderProducts = populateProducts;
        }
    }

    // no método findAll() incluiremos os dados do cliente no pedido
    static async findAll() {
        const result = await query(`
            SELECT
                orders.*,
                customers.id AS "customer.id",
                customers.name AS "customer.name",
                customers.email AS "customer.email",
                customers.created_at AS "customer.created_at",
                customers.updated_at AS "customer.updated_at"
            FROM orders JOIN customers ON customers.id = orders.customer_id;
        `);
        return result.rows.map(row => new Order(row));
    }

    static async create(customerId, orderProducts) {
        // começamos obtendo os dados de todos os produtos desse pedido
        const storedOrderProducts = await query(
            `SELECT * FROM products WHERE id = ANY($1::int[]);`,
            [orderProducts.map(product => product.id)]
        )

        // fazemos a soma do total de cada produto * sua quantidade
        let orderTotal = 0;
        const populatedOrderProducts = storedOrderProducts.rows.map((row) => {
            const { quantity } = orderProducts.find((product) => product.id === row.id)
            orderTotal += +row.price * quantity
            return { product: new Product(row), quantity }
        })

        // precisamos obter um cliente específico da pool para
        // executar todas as queries da transaction nele
        const dbClient = await getClient()
        let response
        try {
            await dbClient.query("BEGIN")

            // inserimos o pedido
            const orderCreationResult = await dbClient.query(
                `INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *;`,
                [customerId, orderTotal]
            )

            const order = new Order(orderCreationResult.rows[0], null, populatedOrderProducts)

            // e então salvamos cada produto desse pedido com sua quantidade
            for (const entry of populatedOrderProducts) {
                await dbClient.query(
                    `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);`,
                    [order.id, entry.product.id, entry.quantity]
                )
            }

            // e então fazemos o commit da transaction
            await dbClient.query("COMMIT")
            response = order
        } catch (error) {
            await dbClient.query("ROLLBACK")
            response = { message: `Error while creating order: ${error.message}` }
        } finally {
            dbClient.release()
        }

        return response
    }

    // no método findById() incluiremos os dados do cliente e a lista dos produtos
    static async findById(id) {
        const orderResult = await query(`
            SELECT
                orders.*,
                customers.id AS "customer.id",
                customers.name AS "customer.name",
                customers.email AS "customer.email",
                customers.created_at AS "customer.created_at",
                customers.updated_at AS "customer.updated_at"
            FROM orders JOIN customers ON customers.id = orders.customer_id
            WHERE orders.id = $1;
        `,[id])

        const orderProductsResult = await query(`
            SELECT order_products.*, products.*
            FROM order_products JOIN products ON order_products.product_id = products.id
            WHERE order_products.order_id = $1;
        `,[id])

        const orderData = orderResult.rows[0]

        const customer = new Customer({
            id: orderData["customer.id"],
            name: orderData["customer.name"],
            email: orderData["customer.email"],
            created_at: orderData["customer.created_at"],
            updated_at: orderData["customer.updated_at"]
        })

        return new Order(orderData, customer, orderProductsResult.rows)
    }

    static async delete(id) {
        const dbClient = await getClient()
        let result
        try {
            await dbClient.query("BEGIN")
            await dbClient.query(`DELETE FROM order_products WHERE order_id = $1;`, [id])
            await dbClient.query(`DELETE FROM orders WHERE id = $1`, [id])
            await dbClient.query("COMMIT")
            result = { message: "Order deleted successfully" }
        } catch (error) {
            await dbClient.query("ROLLBACK")
            result = { message: "Error while deleting order" }
        } finally {
            dbClient.release()
        }
        return result
    }
};

module.exports = Order;