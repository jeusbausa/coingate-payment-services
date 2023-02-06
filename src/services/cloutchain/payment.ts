import { AxiosPromise } from "axios";
import { IPaymentAuthorizeBodySchema } from "../../utils/schema/paymentAuthorize";
import cloutchain from "../../utils/api/cloutchain";

const paymentAuthorize = async (body: IPaymentAuthorizeBodySchema): AxiosPromise => {
    return cloutchain.post("/authorize/coingate", body);
};

export default {
    paymentAuthorize,
};
