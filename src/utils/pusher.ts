import Pusher from "pusher";
import { env } from "./env";

const pusher = new Pusher({
    appId: env.PUSHER_APP_ID,
    key: env.PUSHER_KEY,
    secret: env.PUSHER_SECRET,
    cluster: env.PUSHER_CLUSTER,
});

export default pusher;
