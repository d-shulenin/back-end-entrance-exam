import { cleanEnv, str, num } from "envalid";

export const env = cleanEnv(process.env, {
    API_BASE_URL: str({ default: "https://the-one-api.dev/v2" }),
    API_KEY: str(),
    SERVER_PORT: num({ default: 3005 })
});
