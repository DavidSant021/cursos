const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:26324915@localhost:2002/node_postgres",
    max: 2
})

async function openConnection() {
    const client = await pool.connect()

    const result = await client.query("SELECT 1 + 1 AS soma;")
    console.log(result.rows)

    setTimeout(() => {
        client.release()
        console.log("Fechando conexào...")
    }, 5000)
}

openConnection()

setTimeout(() => {
    openConnection()
}, 1000)

setTimeout(() => {
    openConnection()
}, 2000)