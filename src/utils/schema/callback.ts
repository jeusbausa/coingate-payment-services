import { z } from "zod";

export const handleCallbackSchema = z.object({
    id: z.string().min(1),
    order_id: z.string().min(1),
    status: z.string().min(1),
});

export type IHandleCallbackSchema = z.infer<typeof handleCallbackSchema>;
