import axios from "axios";
import { ApiError } from "@/exceptions";

const { API_BASE_URL, API_KEY } = process.env;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});

class ApiService {
    async getBook() {
        const response = await api.get("/book");
        return response.data;
    }

    async getBookById(id: string) {
        const response = await api.get(`/book/${id}`);

        if (!response.data.success) {
            throw ApiError.BadRequest("Книги с таким id не существует");
        }

        return response.data;
    }

    async getCharacter() {
        const response = await api.get("/character");
        return response.data;
    }

    async getCharacterById(id: string) {
        const response = await api.get(`/character/${id}`);

        if (!response.data.success) {
            throw ApiError.BadRequest("Персонажа с таким id не существует");
        }

        return response.data;
    }
}

export const apiService = new ApiService();
