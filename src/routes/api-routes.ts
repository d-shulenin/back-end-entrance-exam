import { Router } from "express";
import { apiController } from "@/controllers";

const apiRouter = Router();

apiRouter.get("/book", apiController.getBook);
apiRouter.get("/book/:id", apiController.getBookById);
apiRouter.get("/character", apiController.getCharacter);
apiRouter.get("/character/:id", apiController.getCharacterById);

export { apiRouter };
