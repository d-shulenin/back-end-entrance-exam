import type { NextFunction, Request, Response } from "express";
import type { HttpStatusCode } from "axios";
import { AxiosError } from "axios";
import { ApiError } from "@/exceptions";

const mapAxiosErrorStatusToMessage = (
    message: string,
    status?: HttpStatusCode
): string => {
    if (status === 429) {
        return "Превышен лимит запросов";
    }

    return message;
};

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

    if (err instanceof AxiosError) {
        const { status, message } = err;

        return res.json({
            message: mapAxiosErrorStatusToMessage(message, status)
        });
    }

    return res.status(500).json({ message: "Неизвестная ошибка" });
};
