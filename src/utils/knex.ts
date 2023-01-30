import knex from "knex";
import dotenv from "dotenv";
import { env } from "./env";

dotenv.config();

export const _knex = knex({
    client: "pg",
    connection: {
        host: env.DB_SQL_HOST,
        port: env.DB_SQL_PORT as number,
        database: env.DB_SQL_DB,
        user: env.DB_SQL_USER,
        password: env.DB_SQL_PASS,
    },
    searchPath: ["public"],
});
