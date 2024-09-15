const pg = require(`pg`);

// Connection String: protocolo_bd://usuario:senha@host:porta/nome_do_banco?parametros=
const db = new pg.Client({
    connectionString: "postgres://postgres:26324915@localhost:2002/node_postgres",
});

async function selectPokemon() {
    await db.connect();

    const query = `SELECT * FROM "public"."Pokemon";`;
    const result = await db.query(query);
    console.table(result.rows)

    await db.end();
}

selectPokemon();