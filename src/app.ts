import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { apiRouter, cacheRouter } from "@/routes";
import { errorMiddleware } from "@/middlewares";
import { ApiError } from "./exceptions";

const app = express();
const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "The Lord of the Rings REST API",
            version: "1.0.0",
            description:
                "API с кешированием данных. Вступительное задание для Backend специалиста."
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: `Локальный сервер, использующий порт ${PORT}`
            }
        ]
    },
    apis: ["./**/*.ts"]
};

const specs = swaggerJsdoc(options);

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", apiRouter);
app.use("/cache", cacheRouter);

app.all("*", (req, res, next) =>
    next(ApiError.BadRequest("Такого эндпоинта не существует"))
);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
