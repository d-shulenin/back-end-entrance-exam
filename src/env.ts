import { cleanEnv, str, num } from "envalid";

export const env = cleanEnv(process.env, {
    API_BASE_URL: str(),
    API_KEY: str(),
    SERVER_PORT: num({ default: 3000 })
});
