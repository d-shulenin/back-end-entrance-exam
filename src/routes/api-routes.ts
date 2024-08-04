import { Router } from "express";
import { apiController } from "@/controllers";

const apiRouter = Router();

apiRouter.get("/book", apiController.getBook);

export { apiRouter };
