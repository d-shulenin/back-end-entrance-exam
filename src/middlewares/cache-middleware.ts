import type { NextFunction, Request, Response } from "express";
import { cache } from "@/cache";

export const cacheMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const key = req.path;

    if (cache.has(key)) {
        return res.json(cache.get(key));
    }

    return next();
};
