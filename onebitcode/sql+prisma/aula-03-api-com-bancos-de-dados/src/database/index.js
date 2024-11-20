const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://postgres:26324915@localhost:2002/aula03"
})

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback)
}

async function getClient() {
    return pool.connect()
}

module.exports = { query }