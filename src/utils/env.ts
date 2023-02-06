import dotenv from "dotenv";

dotenv.config();

interface IVariables {
    COINGATE_API_URL: string;
    COINGATE_API_TOKEN: string;
    DB_SQL_HOST: string;
    DB_SQL_PORT?: number;
    DB_SQL_DB: string;
    DB_SQL_USER: string;
    DB_SQL_PASS: string;
    COINGATE_API_CALLBACK: string;
    PUSHER_APP_ID: string;
    PUSHER_KEY: string;
    PUSHER_SECRET: string;
    PUSHER_CLUSTER: string;
    PUSHER_CALLBACK_CHANNEL: string;
    PUSHER_CALLBACK_EVENT: string;
    CLOUTCHAIN_PAYMENT_API_URL: string;
}

export const env = <IVariables>{
    COINGATE_API_URL: process.env.COINGATE_API_URL,
    COINGATE_API_TOKEN: process.env.COINGATE_API_TOKEN,
    DB_SQL_HOST: process.env.DB_SQL_HOST,
    DB_SQL_PORT: process.env.DB_SQL_PORT,
    DB_SQL_DB: process.env.DB_SQL_DB,
    DB_SQL_USER: process.env.DB_SQL_USER,
    DB_SQL_PASS: process.env.DB_SQL_PASS,
    COINGATE_API_CALLBACK: process.env.COINGATE_API_CALLBACK,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
    PUSHER_CLUSTER: process.env.PUSHER_CLUSTER,
    PUSHER_CALLBACK_CHANNEL: process.env.PUSHER_CALLBACK_CHANNEL,
    PUSHER_CALLBACK_EVENT: process.env.PUSHER_CALLBACK_EVENT,
    CLOUTCHAIN_PAYMENT_API_URL: process.env.CLOUTCHAIN_PAYMENT_API_URL,
};
