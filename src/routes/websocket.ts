import { Request, Response, Router } from "express";
import pusher from "../utils/pusher";

const router = Router();

router.post("/pusher/auth", (req: Request, res: Response) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;

    const authResponse = pusher.authorizeChannel(socketId, channel);
    res.send(authResponse);
});

export default router;
