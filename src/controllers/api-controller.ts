import type { Request, Response } from "express";
import { apiService } from "@/services";

class ApiController {
    async getBook(req: Request, res: Response) {
        const data = await apiService.getBook();
        return res.send(data);
    }
}

export const apiController = new ApiController();
