const pg = require(`pg`);

// Connection String: protocolo_bd://usuario:senha@host:porta/nome_do_banco?parametros=
const db = new pg.Client({
    connectionString: "postgres://postgres:26324915@localhost:2002/node_postgres",
});

async function createTable() {
    await db.connect();

    const query = `
      CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        type VARCHAR(255)
      );
    `;

    const result = await db.query(query);
    console.log(result);

    await db.end();
}

createTable();