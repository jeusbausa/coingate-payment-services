import { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";

export default (bodySchema: AnyZodObject, querySchema?: AnyZodObject, paramsSchema?: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const schema = z.object({ body: bodySchema });
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            return next();
        } catch (error) {
            return res.status(400).json(error);
        }
    };
