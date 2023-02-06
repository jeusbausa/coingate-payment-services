import _ from "lodash";
import { env } from "../utils/env";
import { Request, Response } from "express";
import { sendError, sendResponse } from "../utils/handler/response";
import { updateTransaction } from "../models/Transaction";
import payment from "../services/cloutchain/payment";
import pusher from "../utils/pusher";

export const handleCallback = async (req: Request, res: Response) => {
    try {
        const response = await updateTransaction(req.body);
        const data = _.first(response);

        await payment.paymentAuthorize({
            amount: parseFloat(data.price_amount),
            fanUid: data.fan_uid,
            collectionUid: data.collection_uid,
            packType: data.pack_type
        });

        await pusher.trigger(env.PUSHER_CALLBACK_CHANNEL, env.PUSHER_CALLBACK_EVENT, data);
        return sendResponse(res, "ok");
    } catch (error: any) {
        console.log(error);

        return sendError(error, res);
    }
};
