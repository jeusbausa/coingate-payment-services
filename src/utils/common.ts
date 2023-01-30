import moment from "moment";
import { _knex } from "./knex";
import _ from "lodash";
import { checkOrderId } from "../models/Transaction";

export const uniqueId = async <T>(
    generator: () => T | Promise<T>,
    condition: (id: T) => Promise<boolean> | boolean,
): Promise<T> => {
    let is_unique = false;
    let uid = await generator();

    while (!is_unique) {
        uid = await generator();

        if (await condition(uid)) {
            is_unique = true;
        }
    }

    return uid;
};

export const uniqueCode = async (condition: (id: string) => Promise<boolean> | boolean) => {
    return await uniqueId(() => "CC" + moment().year() + (Math.random() + 1).toString().substring(2, 10), condition);
};

export const generateOrderId = async () => {
    return await uniqueCode(async (orderId) => _.isEqual(await checkOrderId(orderId), "0"));
};
