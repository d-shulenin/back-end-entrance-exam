import swaggerJsdoc from "swagger-jsdoc";
import { env } from "@/env";

const { SERVER_PORT } = env;

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
                url: `http://localhost:${SERVER_PORT}`,
                description: `Локальный сервер, использующий порт ${SERVER_PORT}`
            }
        ]
    },
    apis: ["../**/*.ts"]
};

export const specs = swaggerJsdoc(options);
