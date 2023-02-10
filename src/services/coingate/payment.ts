import { AxiosPromise } from "axios";
import coingate from "../../utils/api/coingate";
import { ICheckoutSchemaBody, ICheckoutSchemaParams, ICreateOrderSchemaBody } from "../../utils/schema/createOrder";
import { generateOrderId } from "../../utils/common";
import { env } from "../../utils/env";

const createOrder = async (body: ICreateOrderSchemaBody): AxiosPromise => {
    const success_url = `${env.COINGATE_SUCCESS_PAGE}?order_id=${body.order_id}`;
    const cancel_url = `${env.COINGATE_CANCEL_PAGE}?order_id=${body.order_id}`;

    return coingate.post("/orders", {
        ...body,
        success_url,
        cancel_url,
        callback_url: env.COINGATE_API_CALLBACK,
        order_id: await generateOrderId(),
    });
};

const checkout = async (body: ICheckoutSchemaBody, params: ICheckoutSchemaParams): AxiosPromise => {
    return coingate.post(`/orders/${params.order_id}/checkout`, body);
};

export default {
    createOrder,
    checkout,
};
