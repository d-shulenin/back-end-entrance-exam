import { Router } from "express";
import { apiController } from "@/controllers";
import { cacheMiddleware } from "@/middlewares";

const apiRouter = Router();

apiRouter.use(cacheMiddleware);

apiRouter.get("/book", apiController.getBook);
apiRouter.get("/book/:id", apiController.getBookById);
apiRouter.get("/character", apiController.getCharacter);
apiRouter.get("/character/:id", apiController.getCharacterById);

export { apiRouter };
