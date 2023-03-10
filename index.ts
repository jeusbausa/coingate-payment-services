import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import paymentRouter from "./src/routes/payment";
import callbackRouter from "./src/routes/callback";
import webhookRouter from "./src/routes/websocket";
import redirectRouter from "./src/routes/redirect";

import { _knex } from "./src/utils/knex";

const app: Application = express();

app.use(cookieParser());
app.use(morgan("common"));
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", redirectRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/callback", callbackRouter);
app.use("/webhook", webhookRouter);

const port = process.env.PORT ?? 4000;

app.listen(port, async () => {
    try {
        await _knex.raw("SELECT 1+1 as result");
        console.log("DB connected");
        console.log(`App running on http://localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
});
