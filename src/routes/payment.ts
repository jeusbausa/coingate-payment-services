import { Router } from "express";
import { create, get, checkout } from "../controller/PaymentController";
import validation from "../utils/handler/validation";
import { createOrderSchemaBody, checkoutSchemaBody, checkoutSchemaParams } from "../utils/schema/createOrder";

const router = Router();

router.get("/get", get);
router.post("/create", validation(createOrderSchemaBody), create);
router.post("/:order_id/checkout", validation(checkoutSchemaBody, checkoutSchemaParams), checkout);

export default router;
