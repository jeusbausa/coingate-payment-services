import { Router } from "express";
import { create, get, checkout } from "../controller/PaymentController";
import validation from "../utils/handler/validation";
import {
    createOrderBodyValidation,
    checkoutBodyValidation,
    checkoutParamsValidation
} from "../utils/schema/createOrder";

const router = Router();

router.get("/get", get);
router.post("/create", validation(createOrderBodyValidation), create);
router.post("/:order_id/checkout", [
    validation(checkoutBodyValidation),
    validation(checkoutParamsValidation),
], checkout);

export default router;
