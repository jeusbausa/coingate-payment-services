import { z } from "zod";

const handleCallbackSchema = z.object({
    id: z.string().min(1),
    order_id: z.string().min(1),
    status: z.string().min(1),
});

export const handleCallbackBodyValidation = z.object({
    body: handleCallbackSchema
});

export type IHandleCallbackSchema = z.infer<typeof handleCallbackSchema>;
