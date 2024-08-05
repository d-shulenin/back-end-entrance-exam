"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheController = void 0;
const services_1 = require("@/services");
const exceptions_1 = require("@/exceptions");
class CacheController {
    getValue(req, res, next) {
        const { key } = req.query;
        if (!key) {
            return next(exceptions_1.ApiError.BadRequest("key отсутствует в параметрах"));
        }
        if (typeof key !== "string") {
            return next(exceptions_1.ApiError.BadRequest("Невалидный key в параметрах. key должен быть строкой."));
        }
        const value = services_1.cacheService.getValue(key);
        return res.json(value);
    }
    putValue(req, res, next) {
        const { key, value } = req.body;
        const missingValues = ["key", "value"].filter((item) => req.body[item] === undefined);
        if (missingValues.length) {
            return next(exceptions_1.ApiError.BadRequest(`Невалидное тело запроса. Отсутствуют значения: ${missingValues.join(", ")}.`));
        }
        if (typeof key !== "string") {
            return next(exceptions_1.ApiError.BadRequest("Невалидный key в теле запроса. key должен быть строкой."));
        }
        services_1.cacheService.putValue(key, value);
        return res.send("OK");
    }
    viewCache(req, res) {
        const cache = services_1.cacheService.viewCache();
        return res.json(cache);
    }
    clearCache(req, res) {
        services_1.cacheService.clearCache();
        return res.send("OK");
    }
    setCapacity(req, res, next) {
        const { value } = req.query;
        if (!value) {
            return next(exceptions_1.ApiError.BadRequest("value отсутствует в параметрах"));
        }
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue)) {
            return next(exceptions_1.ApiError.BadRequest("Невалидное value в параметрах. value должно быть числом."));
        }
        services_1.cacheService.setCapacity(parsedValue);
        return res.send("OK");
    }
}
exports.cacheController = new CacheController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWNoZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUEwQztBQUMxQyw2Q0FBd0M7QUFFeEMsTUFBTSxlQUFlO0lBQ2pCLFFBQVEsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3BELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNQLE9BQU8sSUFBSSxDQUFDLHFCQUFRLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FDUCxxQkFBUSxDQUFDLFVBQVUsQ0FDZix1REFBdUQsQ0FDMUQsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLHVCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDcEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRWhDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDekMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUN6QyxDQUFDO1FBQ0YsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQ1AscUJBQVEsQ0FBQyxVQUFVLENBQ2Ysa0RBQWtELGFBQWEsQ0FBQyxJQUFJLENBQ2hFLElBQUksQ0FDUCxHQUFHLENBQ1AsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQ1AscUJBQVEsQ0FBQyxVQUFVLENBQ2YseURBQXlELENBQzVELENBQ0osQ0FBQztRQUNOLENBQUM7UUFFRCx1QkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDakMsTUFBTSxLQUFLLEdBQUcsdUJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNsQyx1QkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDdkQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUMscUJBQVEsQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQ1AscUJBQVEsQ0FBQyxVQUFVLENBQ2YsMERBQTBELENBQzdELENBQ0osQ0FBQztRQUNOLENBQUM7UUFFRCx1QkFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBRVksUUFBQSxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9