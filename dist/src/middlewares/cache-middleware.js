"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const cache_1 = require("../cache");
const cacheMiddleware = (req, res, next) => {
    const key = req.path;
    if (cache_1.cache.has(key)) {
        return res.json(cache_1.cache.get(key));
    }
    return next();
};
exports.cacheMiddleware = cacheMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9jYWNoZS1taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFnQztBQUV6QixNQUFNLGVBQWUsR0FBRyxDQUMzQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ3BCLEVBQUU7SUFDQSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXJCLElBQUksYUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBWlcsUUFBQSxlQUFlLG1CQVkxQiJ9