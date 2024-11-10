const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://postgres:26324915@localhost:2002/exercicio1",
});

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback);
}

module.exports = { query };