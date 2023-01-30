import { AxiosPromise } from "axios";
import axios from "../../utils/axios";
import { ICreateOrderSchemaBody } from "../../utils/schema/createOrder";
import { generateOrderId } from "../../utils/common";

export const createOrder = async (body: ICreateOrderSchemaBody): AxiosPromise => {
    return axios.post("orders", {
        ...body,
        order_id: await generateOrderId(),
    });
};
