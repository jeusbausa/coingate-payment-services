import _ from "lodash";
import { env } from "../utils/env";
import { Request, Response } from "express";
import { updateTransaction } from "../models/Transaction";
import { sendError, sendResponse } from "../utils/handler/response";
import pusher from "../utils/pusher";

export const handleCallback = async (req: Request, res: Response) => {
    try {
        const data = await updateTransaction(req.body);
        await pusher.trigger(env.PUSHER_CALLBACK_CHANNEL, env.PUSHER_CALLBACK_EVENT, _.first(data));
        return sendResponse(res, "ok");
    } catch (error) {
        return sendError(error, res);
    }
};
