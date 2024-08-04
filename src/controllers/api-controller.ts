import type { NextFunction, Request, Response } from "express";
import { apiService } from "@/services";

class ApiController {
    async getBook(req: Request, res: Response) {
        const data = await apiService.getBook();
        return res.send(data);
    }

    async getBookById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const data = await apiService.getBookById(id);
            return res.send(data);
        } catch (e) {
            next(e);
        }
    }

    async getCharacter(req: Request, res: Response) {
        const data = await apiService.getCharacter();
        return res.send(data);
    }

    async getCharacterById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const data = await apiService.getCharacterById(id);
            return res.send(data);
        } catch (e) {
            next(e);
        }
    }
}

export const apiController = new ApiController();
