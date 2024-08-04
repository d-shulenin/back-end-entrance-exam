import { Router } from "express";
import { apiController } from "@/controllers";
import { cacheMiddleware } from "@/middlewares";

const apiRouter = Router();

apiRouter.use(cacheMiddleware);

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
apiRouter.get("/book", apiController.getBook);

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
apiRouter.get("/book/:id", apiController.getBookById);

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
apiRouter.get("/character", apiController.getCharacter);

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
apiRouter.get("/character/:id", apiController.getCharacterById);

export { apiRouter };
