import { Router } from "express";
import { handleCallback } from "../controller/CallbackController";
import validation from "../utils/handler/validation";
import { handleCallbackBodyValidation } from "../utils/schema/callback";

const router = Router();

/** @todo add middleware for verifying token  */
router.post("/", validation(handleCallbackBodyValidation), handleCallback);

export default router;
