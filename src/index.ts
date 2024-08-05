import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { apiRouter, cacheRouter } from "@/routes";
import { errorMiddleware } from "@/middlewares";
import { ApiError } from "@/exceptions";
import { specs } from "@/utils";
import { env } from "@/env";

const app = express();
const { SERVER_PORT } = env;

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", apiRouter);
app.use("/cache", cacheRouter);
app.all("*", (req, res, next) =>
    next(ApiError.BadRequest("Такого эндпоинта не существует"))
);

app.use(errorMiddleware);

app.listen(SERVER_PORT, () => {
    console.log(`Сервер запущен на порту ${SERVER_PORT}`);
});

// eslint-disable-next-line import/no-default-export
export default app;
