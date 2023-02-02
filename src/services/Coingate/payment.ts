import { AxiosPromise } from "axios";
import axios from "../../utils/axios";
import { ICreateOrderSchemaBody } from "../../utils/schema/createOrder";
import { generateOrderId } from "../../utils/common";
import { env } from "../../utils/env";

export const createOrder = async (body: ICreateOrderSchemaBody): AxiosPromise => {
    return axios.post("orders", {
        ...body,
        callback_url: env.COINGATE_API_CALLBACK,
        order_id: await generateOrderId(),
    });
};
