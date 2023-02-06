import coingate from "../services/coingate/payment";
import { createTransaction, getTransactions } from "../models/Transaction";
import { Request, Response } from "express";
import _ from "lodash";
import { sendResponse, sendError } from "../utils/handler/response";
import { ICheckoutSchemaParams } from "../utils/schema/createOrder";

export const get = async (req: Request, res: Response) => {
    try {
        const result = await getTransactions();
        return sendResponse(res, result);
    } catch (error) {
        return sendError(error, res);
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const { data } = await coingate.createOrder(req.body);

        const result = await createTransaction({
            order_id: data.id,
            artist_uid: req.body.artist_uid,
            status: data.status,
            title: data.title,
            do_not_convert: data.do_not_convert,
            orderable_id: data.orderable_id,
            price_currency: data.price_currency,
            price_amount: data.price_amount,
            lightning_network: data.lightning_network,
            receive_currency: data.receive_currency,
            receive_amount: data.receive_amount,
            created_at: data.created_at,
            merchant_order_id: data.order_id,
            payment_url: data.payment_url,
            underpaid_amount: data.underpaid_amount,
            overpaid_amount: data.overpaid_amount,
            is_refundable: data.is_refundable,
            refunds: data.refunds,
            voids: data.voids,
            fees: data.fees,
            token: data.token,
        });

        return sendResponse(res, _.first(result));
    } catch (error) {
        return sendError(error, res);
    }
};

export const checkout = async (req: Request, res: Response) => {
    try {
        const { data } = await coingate.checkout(req.body, req.params as ICheckoutSchemaParams);
        return sendResponse(res, data);
    } catch (error) {
        return sendError(error, res);
    }
};
