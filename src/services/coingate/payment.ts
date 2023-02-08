import { AxiosPromise } from "axios";
import coingate from "../../utils/api/coingate";
import { ICheckoutSchemaBody, ICheckoutSchemaParams, ICreateOrderSchemaBody } from "../../utils/schema/createOrder";
import { generateOrderId } from "../../utils/common";
import { env } from "../../utils/env";

const createOrder = async (body: ICreateOrderSchemaBody): AxiosPromise => {
    return coingate.post("/orders", {
        ...body,
        success_url: "http://example.com/success",
        cancel_url: "http://example.com/cancel",
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
