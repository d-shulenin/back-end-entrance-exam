import axios from "axios";

const { API_BASE_URL, API_KEY } = process.env;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});

api.interceptors.request.use((request) => {
    console.log(
        `Выполняется ${request.method} запрос на эндпоинт ${request.url}`
    );
    return request;
});

class ApiService {
    async getBook() {
        const { data } = await api.get("/book");
        return data.docs;
    }

    async getBookById(id: string) {
        const { data } = await api.get(`/book/${id}`);
        return data.docs[0];
    }

    async getCharacter() {
        const { data } = await api.get("/character");
        return data.docs;
    }

    async getCharacterById(id: string) {
        const { data } = await api.get(`/character/${id}`);
        return data.docs[0];
    }
}

export const apiService = new ApiService();
