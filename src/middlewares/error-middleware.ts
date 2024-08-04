import type { NextFunction, Request, Response } from "express";
import { ApiError } from "@/exceptions";

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: "Неожиданная ошибка" });
};
