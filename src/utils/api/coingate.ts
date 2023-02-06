import axios from "axios";
import { env } from "../env";

export default axios.create({
    baseURL: env.COINGATE_API_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.COINGATE_API_TOKEN ?? null}`,
    },
});
