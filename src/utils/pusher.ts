import Pusher from "pusher";

const pusher = new Pusher({
    appId: "1547875",
    key: "31eabbbc6872be0b843c",
    secret: "b490f3147a673aebeb5c",
    cluster: "mt1",
});

export default pusher;
