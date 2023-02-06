import axios from "axios";
import { env } from "../env";

export default axios.create({
    baseURL: env.CLOUTCHAIN_PAYMENT_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
