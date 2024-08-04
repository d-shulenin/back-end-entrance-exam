import type { NextFunction, Request, Response } from "express";
import { apiService } from "@/services";
import { cache } from "@/cache";

class ApiController {
    async getBook(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await apiService.getBook();
            cache.put(req.path, data);
            return res.json(data);
        } catch (e) {
            return next(e);
        }
    }

    async getBookById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const data = await apiService.getBookById(id);
            cache.put(req.path, data);
            return res.json(data);
        } catch (e) {
            return next(e);
        }
    }

    async getCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await apiService.getCharacter();
            cache.put(req.path, data);
            return res.json(data);
        } catch (e) {
            return next(e);
        }
    }

    async getCharacterById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const data = await apiService.getCharacterById(id);
            cache.put(req.path, data);
            return res.json(data);
        } catch (e) {
            return next(e);
        }
    }
}

export const apiController = new ApiController();
