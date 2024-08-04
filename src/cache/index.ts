import { LFUCache } from "./lfuCache";

const INITIAL_CACHE_CAPACITY = 5;

export const cache = new LFUCache(INITIAL_CACHE_CAPACITY);
