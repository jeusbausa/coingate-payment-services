import { z } from "zod";
import { PackType } from "./paymentAuthorize";

const createOrderSchemaBody = z.object({
    order_id: z.string().optional(),
    artist_uid: z.string().uuid().min(1),
    fan_uid: z.string().uuid().min(1),
    collection_uid: z.string().uuid().min(1),
    pack_type: z.nativeEnum(PackType),
    quantity: z.number().max(10000),
    price_amount: z.number().min(1),
    price_currency: z.string().min(1),
    receive_currency: z.string().min(1),
    title: z.string().max(150).optional(),
    description: z.string().max(500).optional(),
    callback_url: z.string().url().optional(),
    cancel_url: z.string().url().optional(),
    success_url: z.string().url().optional(),
    token: z.string().optional(),
    purchaser_email: z.string().email().optional(),
    fee: z.number().optional(),
});

export const createOrderBodyValidation = z.object({
    body: createOrderSchemaBody
});

export type ICreateOrderSchemaBody = z.infer<typeof createOrderSchemaBody>;

const checkoutSchemaBody = z.object({
    pay_currency: z.string().min(1),
    lightning_network: z.number().optional(),
    purchaser_email: z.string().optional(),
    platform_id: z.number().optional(),
});

export const checkoutBodyValidation = z.object({
    body: checkoutSchemaBody
});

export type ICheckoutSchemaBody = z.infer<typeof checkoutSchemaBody>;

const checkoutSchemaParams = z.object({
    order_id: z.string().min(1),
});

export const checkoutParamsValidation = z.object({
    params: checkoutSchemaParams
});

export type ICheckoutSchemaParams = z.infer<typeof checkoutSchemaParams>;
