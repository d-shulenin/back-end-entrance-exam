"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiService = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("@/env");
const { API_BASE_URL, API_KEY } = env_1.env;
const api = axios_1.default.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});
api.interceptors.request.use((request) => {
    console.log(`Выполняется ${request.method} запрос на эндпоинт ${request.url}`);
    return request;
});
class ApiService {
    getBook() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield api.get("/book");
            return data.docs;
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield api.get(`/book/${id}`);
            return data.docs[0];
        });
    }
    getCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield api.get("/character");
            return data.docs;
        });
    }
    getCharacterById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield api.get(`/character/${id}`);
            return data.docs[0];
        });
    }
}
exports.apiService = new ApiService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvYXBpLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLCtCQUE0QjtBQUU1QixNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLFNBQUcsQ0FBQztBQUV0QyxNQUFNLEdBQUcsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3JCLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLE9BQU8sRUFBRTtRQUNMLGFBQWEsRUFBRSxVQUFVLE9BQU8sRUFBRTtLQUNyQztDQUNKLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQ1AsZUFBZSxPQUFPLENBQUMsTUFBTSx1QkFBdUIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUNwRSxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVU7SUFDTixPQUFPOztZQUNULE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxFQUFVOztZQUN4QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBRUssWUFBWTs7WUFDZCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxFQUFVOztZQUM3QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUFBO0NBQ0o7QUFFWSxRQUFBLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=