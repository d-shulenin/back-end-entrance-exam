import type { NextFunction, Request, Response } from "express";
import { cacheService } from "@/services";
import { ApiError } from "@/exceptions";

class CacheController {
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
            return next(
                ApiError.BadRequest("Value отсутствует в поисковых параметрах")
            );
        }

        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue)) {
            return next(
                ApiError.BadRequest(
                    "Невалидный value в поисковых параметрах. Value должно быть числом."
                )
            );
        }

        cacheService.setCapacity(parsedValue);
        return res.send("OK");
    }
}

export const cacheController = new CacheController();
