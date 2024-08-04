import type { NextFunction, Request, Response } from "express";
import type { HttpStatusCode } from "axios";
import { AxiosError } from "axios";
import { ApiError } from "@/exceptions";

const mapAxiosErrorStatusToMessage = (
    message: string,
    status?: HttpStatusCode
): string => {
    switch (status) {
        case 429:
            return "Превышен лимит запросов";
        case 500:
            return "Что-то пошло не так";
        default:
            return message;
    }
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
        const { status = 500, message } = err;

        return res.status(status).json({
            message: mapAxiosErrorStatusToMessage(message, status)
        });
    }

    return res.status(500).json({ message: "Неизвестная ошибка" });
};
