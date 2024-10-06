const { Client } = require("pg");

const client = new Client({
    connectionString: "postgres://postgres:26324915@localhost:2002/node_postgres"
});

async function openConnection() {
    await client.connect()

    const result = await client.query("SELECT 1 + 1 AS resultado;")
    console.log(result.rows)

    setTimeout(() => {
        client.end()
        console.log("Fechando conexão...")
    }, 5000)
}

openConnection();