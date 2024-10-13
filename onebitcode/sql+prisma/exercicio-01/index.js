const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:26324915@localhost:2002/exercicio1"
})

async function createTable() {
    const table = await pool.query(`
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            date VARCHAR(50) NOT NULL,
            totalTickets INT NOT NULL,
            ticketsSold INT NOT NULL
        )
    `)

    console.log(table)

    setTimeout(() => {
        console.log("Fechando conexão...")
    }, 3000)
}

async function createNewEvent(event) {
    
}

createTable()