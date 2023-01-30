import { Router } from "express";
import { create, get } from "../controller/PaymentController";
import validation from "../utils/handler/validation";
import { createOrderSchemaBody } from "../utils/schema/createOrder";

const router = Router();

router.get("/get", get);
router.post("/", validation(createOrderSchemaBody), create);

export default router;
