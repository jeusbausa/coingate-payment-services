import { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";

export default (bodySchema: AnyZodObject, paramsSchema?: AnyZodObject, querySchema?: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const schema = z.object({ body: bodySchema });
        try {
            await schema.parseAsync({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            return next();
        } catch (error) {
            return res.status(400).json(error);
        }
    };
