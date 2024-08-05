"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("@/routes");
const middlewares_1 = require("@/middlewares");
const exceptions_1 = require("@/exceptions");
const utils_1 = require("@/utils");
const env_1 = require("@/env");
const app = (0, express_1.default)();
const { SERVER_PORT } = env_1.env;
app.use(express_1.default.json());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(utils_1.specs));
app.use("/api", routes_1.apiRouter);
app.use("/cache", routes_1.cacheRouter);
app.all("*", (req, res, next) => next(exceptions_1.ApiError.BadRequest("Такого эндпоинта не существует")));
app.use(middlewares_1.errorMiddleware);
app.listen(SERVER_PORT, () => {
    console.log(`Сервер запущен на порту ${SERVER_PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF1QjtBQUN2QixzREFBOEI7QUFDOUIsNEVBQTJDO0FBQzNDLHFDQUFrRDtBQUNsRCwrQ0FBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLG1DQUFnQztBQUNoQywrQkFBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLFNBQUcsQ0FBQztBQUU1QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSw0QkFBUyxDQUFDLEtBQUssRUFBRSw0QkFBUyxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsQ0FBQyxDQUFDO0FBRTFELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGtCQUFTLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxvQkFBVyxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQzVCLElBQUksQ0FBQyxxQkFBUSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQzlELENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUFlLENBQUMsQ0FBQztBQUV6QixHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMsQ0FBQyJ9