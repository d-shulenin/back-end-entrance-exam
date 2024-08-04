import { Router } from "express";
import { cacheController } from "@/controllers";

const cacheRouter = Router();

cacheRouter.get("/get", cacheController.getValue);
cacheRouter.post("/put", cacheController.putValue);
cacheRouter.get("/view", cacheController.viewCache);
cacheRouter.get("/clear", cacheController.clearCache);
cacheRouter.patch("/capacity", cacheController.setCapacity);

export { cacheRouter };
