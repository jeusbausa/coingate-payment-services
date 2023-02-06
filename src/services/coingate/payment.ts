import { AxiosPromise } from "axios";
import axios from "../../utils/axios";
import { ICheckoutSchemaBody, ICheckoutSchemaParams, ICreateOrderSchemaBody } from "../../utils/schema/createOrder";
import { generateOrderId } from "../../utils/common";
import { env } from "../../utils/env";

const createOrder = async (body: ICreateOrderSchemaBody): AxiosPromise => {
    return axios.post("orders", {
        ...body,
        callback_url: env.COINGATE_API_CALLBACK,
        order_id: await generateOrderId(),
    });
};

const checkout = async (body: ICheckoutSchemaBody, params: ICheckoutSchemaParams): AxiosPromise => {
    return axios.post(`orders/${params.order_id}/checkout`, body);
};

export default {
    createOrder,
    checkout,
};
