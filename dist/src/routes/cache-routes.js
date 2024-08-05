"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("@/controllers");
const cacheRouter = (0, express_1.Router)();
exports.cacheRouter = cacheRouter;
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
cacheRouter.get("/", controllers_1.cacheController.getValue);
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
cacheRouter.post("/", controllers_1.cacheController.putValue);
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
cacheRouter.get("/all", controllers_1.cacheController.viewCache);
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
cacheRouter.delete("/", controllers_1.cacheController.clearCache);
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
cacheRouter.patch("/capacity", controllers_1.cacheController.setCapacity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtcm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9jYWNoZS1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlDO0FBQ2pDLCtDQUFnRDtBQUVoRCxNQUFNLFdBQVcsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQTJJcEIsa0NBQVc7QUF6SXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLDZCQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSw2QkFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWhEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw2QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5EOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSw2QkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSCxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSw2QkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDIn0=