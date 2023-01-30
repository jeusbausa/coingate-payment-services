import { Router } from "express";
import { handleCallback } from "../controller/CallbackController";
import validation from "../utils/handler/validation";
import { handleCallbackSchema } from "../utils/schema/callback";

const router = Router();

/** @todo add middleware for verifying token  */
router.put("/", validation(handleCallbackSchema), handleCallback);

export default router;
