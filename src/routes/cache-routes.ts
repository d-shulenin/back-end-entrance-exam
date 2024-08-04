import { Router } from "express";
import { cacheController } from "@/controllers";

const cacheRouter = Router();

/**
 * @swagger
 * /cache:
 *   get:
 *     summary: Получение данных с проверкой наличия в кеше
 *     tags:
 *       - Cache
 *     parameters:
 *       - name: key
 *         in: query
 *         description: Ключ, по которому берётся значения из кеша
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Возвращает значение из кеша по переданному ключу, если оно там есть. Иначе возвращает сообщение "В кеше по этому ключу ничего нет"
 *         content:
 *           application/json:
 *             type: object
 */
cacheRouter.get("/", cacheController.getValue);

/**
 * @swagger
 * /cache:
 *   post:
 *     summary: Обновление данных в кеше
 *     tags:
 *       - Cache
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *               value:
 *                 type: any
 *           example: {
 *              "key": "/book",
 *              "value": {
 *                  "title": "New book",
 *                  "description": "Very interesting book!"
 *              }
 *           }
 *     responses:
 *       200:
 *         description: Возвращает "OK" при успешном обновлении данных в кеше
 *         content:
 *           text/html:
 *             type: string
 *       400:
 *         description: Ошибка, если в теле запроса отсутствуют key и value или передан невалидный key
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example: {
 *               "message": "Невалидное тело запроса. Отсутствуют значения: key, value."
 *             }
 */
cacheRouter.post("/", cacheController.putValue);

/**
 * @swagger
 * /cache/all:
 *   get:
 *     summary: Просмотр всего кеша
 *     tags:
 *       - Cache
 *     responses:
 *       200:
 *         description: Возвращает все ключи и значения из кеша
 *         content:
 *           application/json:
 *             type: object
 */
cacheRouter.get("/all", cacheController.viewCache);

/**
 * @swagger
 * /cache:
 *   delete:
 *     summary: Очистка кеша
 *     tags:
 *       - Cache
 *     responses:
 *       200:
 *         description: Возвращает "OK" при успешной очистке кеша
 *         content:
 *          text/html:
 *             type: string
 */
cacheRouter.delete("/", cacheController.clearCache);

/**
 * @swagger
 * /cache/capacity:
 *   patch:
 *     summary: Изменение размера кеша
 *     tags:
 *       - Cache
 *     parameters:
 *       - name: value
 *         in: query
 *         description: Новый размер кеша
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Возвращает "OK" при успешном изменении размера кеша
 *         content:
 *          text/html:
 *             type: string
 *       400:
 *         description: Ошибка, если в параметрах указано невалидное value
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example: {
 *               "message": "Невалидное value в параметрах. value должно быть числом."
 *             }
 *
 */
cacheRouter.patch("/capacity", cacheController.setCapacity);

export { cacheRouter };
