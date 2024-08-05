"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const apiRouter = (0, express_1.Router)();
exports.apiRouter = apiRouter;
apiRouter.use(middlewares_1.cacheMiddleware);
/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: Список всех книг
 *     tags:
 *       - API
 *     responses:
 *       200:
 *         description: Возвращает список всех книг по "Властелину колец"
 *         content:
 *           application/json:
 *             type: array
 */
apiRouter.get("/book", controllers_1.apiController.getBook);
/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     summary: Одна конкретная книга
 *     tags:
 *       - API
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id книги
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Возвращает конкретную книгу по "Властелину колец"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *             example: {
 *               "_id": "5cf58080b53e011a64671584",
 *               "name": "The Return Of The King"
 *             }
 *       500:
 *         description: Ошибка во время запроса или книга с переданным id не найдена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example: {
 *               "message": "Что-то пошло не так"
 *             }
 */
apiRouter.get("/book/:id", controllers_1.apiController.getBookById);
/**
 * @swagger
 * /api/character:
 *   get:
 *     summary: Список всех персонажей
 *     tags:
 *       - API
 *     responses:
 *       200:
 *         description: Возвращает список всех персонажей из "Властелина колец"
 *         content:
 *           application/json:
 *             type: array
 */
apiRouter.get("/character", controllers_1.apiController.getCharacter);
/**
 * @swagger
 * /api/character/{id}:
 *   get:
 *     summary: Один конкретный персонаж
 *     tags:
 *       - API
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id персонажа
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Возвращает такие метаданные как имя, пол, раса и многое другое
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 wikiUrl:
 *                   type: string
 *                 race:
 *                   type: string
 *                 gender:
 *                   type: string
 *             example: {
 *               "_id": "5cd99d4bde30eff6ebccfbbe",
 *               "name": "Adanel",
 *               "wikiUrl": "http://lotr.wikia.com//wiki/Adanel",
 *               "race": "Human",
 *               "birth": null,
 *               "gender": "Female",
 *               "death": null,
 *               "hair": null,
 *               "height": null,
 *               "realm": null,
 *               "spouse": "Belemir"
 *             }
 *       500:
 *         description: Ошибка во время запроса или персонаж с переданным id не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example: {
 *               "message": "Что-то пошло не так"
 *             }
 */
apiRouter.get("/character/:id", controllers_1.apiController.getCharacterById);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXBpLXJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBaUM7QUFDakMsK0NBQThDO0FBQzlDLCtDQUFnRDtBQUVoRCxNQUFNLFNBQVMsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQTZJbEIsOEJBQVM7QUEzSWxCLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQWUsQ0FBQyxDQUFDO0FBRS9COzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwyQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ0c7QUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwyQkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXREOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSwyQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5REc7QUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLDJCQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyJ9