import { Request, Response } from "express";
import { updateTransaction } from "../models/Transaction";
import { sendError, sendResponse } from "../utils/handler/response";

export const handleCallback = async (req: Request, res: Response) => {
    try {
        await updateTransaction(req.body);
        return sendResponse(res, "ok");
    } catch (error) {
        return sendError(error, res);
    }
};
