"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const axios_1 = require("axios");
const exceptions_1 = require("@/exceptions");
const mapAxiosErrorStatusToMessage = (message, status) => {
    switch (status) {
        case 429:
            return "Превышен лимит запросов";
        case 500:
            return "Что-то пошло не так";
        default:
            return message;
    }
};
const errorMiddleware = (err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    if (err instanceof exceptions_1.ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    if (err instanceof axios_1.AxiosError) {
        const { status = 500, message } = err;
        return res.status(status).json({
            message: mapAxiosErrorStatusToMessage(message, status)
        });
    }
    return res.status(500).json({ message: "Неизвестная ошибка" });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvci1taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGlDQUFtQztBQUNuQyw2Q0FBd0M7QUFFeEMsTUFBTSw0QkFBNEIsR0FBRyxDQUNqQyxPQUFlLEVBQ2YsTUFBdUIsRUFDakIsRUFBRTtJQUNSLFFBQVEsTUFBTSxFQUFFLENBQUM7UUFDYixLQUFLLEdBQUc7WUFDSixPQUFPLHlCQUF5QixDQUFDO1FBQ3JDLEtBQUssR0FBRztZQUNKLE9BQU8scUJBQXFCLENBQUM7UUFDakM7WUFDSSxPQUFPLE9BQU8sQ0FBQztJQUN2QixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUssTUFBTSxlQUFlLEdBQUcsQ0FDM0IsR0FBVSxFQUNWLEdBQVksRUFDWixHQUFhO0FBQ2IsNkRBQTZEO0FBQzdELElBQWtCLEVBQ3BCLEVBQUU7SUFDQSxJQUFJLEdBQUcsWUFBWSxxQkFBUSxFQUFFLENBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksR0FBRyxZQUFZLGtCQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQixPQUFPLEVBQUUsNEJBQTRCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsZUFBZSxtQkFvQjFCIn0=