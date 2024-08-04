import { Router } from "express";
import { cacheController } from "@/controllers";

const cacheRouter = Router();

cacheRouter.get("/view", cacheController.viewCache);
cacheRouter.get("/clear", cacheController.clearCache);
cacheRouter.patch("/capacity", cacheController.setCapacity);

export { cacheRouter };
