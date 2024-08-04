import { cache } from "@/cache";

class CacheService {
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
