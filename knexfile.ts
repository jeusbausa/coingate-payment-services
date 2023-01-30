import type { Knex } from "knex";
import { env } from "./src/utils/env";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            database: env.DB_SQL_DB,
            user: env.DB_SQL_USER,
            password: env.DB_SQL_PASS,
            host: env.DB_SQL_HOST,
            port: env.DB_SQL_PORT,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};

module.exports = config;
