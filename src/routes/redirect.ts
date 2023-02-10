import { Request, Response, Router } from "express";

const router = Router();

router.get("/success/:order_id", (req: Request, res: Response) => {
    res.send(`Success! Order ID => ${req.params.order_id}`);
});

router.get("/canceled/:order_id", (req: Request, res: Response) => {
    res.send(`Cancelled! Order ID => ${req.params.order_id}`);
});


export default router;
