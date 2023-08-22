import dotenv from 'dotenv'
import knex from "knex";

dotenv.config()

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DB_CONECTION
    }
})

export default db;