"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        this.status = status;
    }
    static BadRequest(message) {
        return new ApiError(400, message);
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2V4Y2VwdGlvbnMvYXBpLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsUUFBUyxTQUFRLEtBQUs7SUFDL0IsWUFBbUIsTUFBYyxFQUFTLE9BQWU7UUFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZTtRQUM3QixPQUFPLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUFURCw0QkFTQyJ9