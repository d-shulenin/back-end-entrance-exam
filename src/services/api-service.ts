import axios from "axios";

const { API_BASE_URL } = process.env;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

class ApiService {
    async getBook() {
        const response = await axiosInstance.get("/book");
        return response.data;
    }
}

export const apiService = new ApiService();
