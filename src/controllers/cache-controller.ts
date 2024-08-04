import type { NextFunction, Request, Response } from "express";
import { cacheService } from "@/services";
import { ApiError } from "@/exceptions";

class CacheController {
    getValue(req: Request, res: Response, next: NextFunction) {
        const { key } = req.query;

        if (!key) {
            return next(ApiError.BadRequest("key отсутствует в параметрах"));
        }

        if (typeof key !== "string") {
            return next(
                ApiError.BadRequest(
                    "Невалидный key в параметрах. key должен быть строкой."
                )
            );
        }

        const value = cacheService.getValue(key);
        return res.json(value);
    }

    putValue(req: Request, res: Response, next: NextFunction) {
        const { key, value } = req.body;

        const missingValues = ["key", "value"].filter(
            (item) => req.body[item] === undefined
        );
        if (missingValues.length) {
            return next(
                ApiError.BadRequest(
                    `Невалидное тело запроса. Отсутствуют значения: ${missingValues.join(
                        ", "
                    )}.`
                )
            );
        }

        if (typeof key !== "string") {
            return next(
                ApiError.BadRequest(
                    "Невалидный key в теле запроса. key должен быть строкой."
                )
            );
        }

        cacheService.putValue(key, value);
        return res.send("OK");
    }

    viewCache(req: Request, res: Response) {
        const cache = cacheService.viewCache();
        return res.json(cache);
    }

    clearCache(req: Request, res: Response) {
        cacheService.clearCache();
        return res.send("OK");
    }

    setCapacity(req: Request, res: Response, next: NextFunction) {
        const { value } = req.query;

        if (!value) {
            return next(ApiError.BadRequest("value отсутствует в параметрах"));
        }

        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue)) {
            return next(
                ApiError.BadRequest(
                    "Невалидный value в параметрах. value должно быть числом."
                )
            );
        }

        cacheService.setCapacity(parsedValue);
        return res.send("OK");
    }
}

export const cacheController = new CacheController();
