import _ from "lodash";
import { _knex } from "../utils/knex";
import { IHandleCallbackSchema } from "../utils/schema/callback";

export const getTransactions = () => {
    return _knex("coingate_transaction_details").select("*");
};

export const createTransaction = async (data: any) => {
    return await _knex.transaction(
        async (trx) => await trx("coingate_transaction_details").insert(data).returning("*"),
    );
};

export const updateTransaction = async (request: IHandleCallbackSchema) => {
    return await _knex.transaction(
        async (trx) =>
            await trx("coingate_transaction_details")
                .where({ order_id: request.id, merchant_order_id: request.order_id })
                .update({ status: request.status })
                .returning("*"),
    );
};

export const checkOrderId = async (orderId: string) => {
    const result = await _knex("coingate_transaction_details")
        .where("merchant_order_id", orderId)
        .count({ count: "*" })
        .first();
    if (!_.isNil(result)) {
        return result.count as number;
    }
};
