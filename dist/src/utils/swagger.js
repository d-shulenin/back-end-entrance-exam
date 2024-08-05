"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const env_1 = require("../env");
const { SERVER_PORT } = env_1.env;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "The Lord of the Rings REST API",
            version: "1.0.0",
            description: "API с кешированием данных. Вступительное задание для Backend специалиста."
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
exports.specs = (0, swagger_jsdoc_1.default)(options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9zd2FnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtFQUF5QztBQUN6QywrQkFBNEI7QUFFNUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLFNBQUcsQ0FBQztBQUU1QixNQUFNLE9BQU8sR0FBRztJQUNaLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRTtZQUNGLEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkMsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUNQLDJFQUEyRTtTQUNsRjtRQUNELE9BQU8sRUFBRTtZQUNMO2dCQUNJLEdBQUcsRUFBRSxvQkFBb0IsV0FBVyxFQUFFO2dCQUN0QyxXQUFXLEVBQUUsdUNBQXVDLFdBQVcsRUFBRTthQUNwRTtTQUNKO0tBQ0o7SUFDRCxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7Q0FDdkIsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLElBQUEsdUJBQVksRUFBQyxPQUFPLENBQUMsQ0FBQyJ9