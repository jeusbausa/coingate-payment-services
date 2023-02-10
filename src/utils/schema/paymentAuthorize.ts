import { z } from "zod";

export enum PackType {
    one = 'one',
    ten = 'ten',
    all = 'all',
}

export enum OrderDataStatus {
    new = 'new',
    pending = 'pending',
    paid = 'paid',
    expired = 'expired',
    invalid = 'invalid'
}

const paymentAuthorizeBodySchema = z.object({
    fanUid: z.string().uuid().min(1),
    collectionUid: z.string().uuid().min(1),
    packType: z.nativeEnum(PackType),
    amount: z.number().max(10000),
});

export const paymentAuthorizeBodyValidation = z.object({
    body: paymentAuthorizeBodySchema
});

export type IPaymentAuthorizeBodySchema = z.infer<typeof paymentAuthorizeBodySchema>;
