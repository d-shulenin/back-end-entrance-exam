import { cache } from "@/cache";

class CacheService {
    getValue(key: string) {
        const value = cache.get(key);
        return value ?? "В кеше по этому ключу ничего нет";
    }

    putValue(key: string, value: unknown) {
        cache.put(key, value);
    }

    viewCache() {
        return cache.view();
    }

    clearCache() {
        cache.clear();
    }

    setCapacity(value: number) {
        cache.setCapacity(value);
    }
}

export const cacheService = new CacheService();
