"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheService = void 0;
const cache_1 = require("@/cache");
class CacheService {
    getValue(key) {
        const value = cache_1.cache.get(key);
        return value !== null && value !== void 0 ? value : "В кеше по этому ключу ничего нет";
    }
    putValue(key, value) {
        cache_1.cache.put(key, value);
    }
    viewCache() {
        return cache_1.cache.view();
    }
    clearCache() {
        cache_1.cache.clear();
    }
    setCapacity(value) {
        cache_1.cache.setCapacity(value);
    }
}
exports.cacheService = new CacheService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9jYWNoZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFnQztBQUVoQyxNQUFNLFlBQVk7SUFDZCxRQUFRLENBQUMsR0FBVztRQUNoQixNQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksa0NBQWtDLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUNoQyxhQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVO1FBQ04sYUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUNyQixhQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMifQ==