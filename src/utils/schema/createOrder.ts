import { z } from "zod";

export const createOrderSchemaBody = z.object({
    order_id: z.string().optional(),
    artist_uid: z.string().uuid().min(1),
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
});

export type ICreateOrderSchemaBody = z.infer<typeof createOrderSchemaBody>;

export const checkoutSchemaBody = z.object({
    pay_currency: z.string().min(1),
    lightning_network: z.number().optional(),
    purchaser_email: z.string().optional(),
    platform_id: z.number().optional(),
});

export type ICheckoutSchemaBody = z.infer<typeof checkoutSchemaBody>;

export const checkoutSchemaParams = z.object({
    order_id: z.string().min(1),
});

export type ICheckoutSchemaParams = z.infer<typeof checkoutSchemaParams>;
