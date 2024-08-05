"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const doubleLinkedList_1 = require("./doubleLinkedList");
const node_1 = require("./node");
class LFUCache {
    constructor(capacity = 3, size = 0, mapOfLists = {}, // map frequency -> double-linked list
    mapOfNodes = {}) {
        this.capacity = capacity;
        this.size = size;
        this.mapOfLists = mapOfLists;
        this.mapOfNodes = mapOfNodes;
        // синглтон
        if (LFUCache.instance) {
            return LFUCache.instance;
        }
        LFUCache.instance = this;
    }
    view() {
        const rawCache = {};
        for (const key in this.mapOfNodes) {
            if (Object.hasOwn(this.mapOfNodes, key)) {
                rawCache[key] = this.mapOfNodes[key].value;
            }
        }
        return rawCache;
    }
    has(key) {
        return key in this.mapOfNodes;
    }
    get(key) {
        if (!this.has(key)) {
            console.log(`Значения по ключу "${key}" нет в кеше`);
            return;
        }
        const node = this.mapOfNodes[key];
        const list = this.mapOfLists[node.count];
        list.removeNode(node);
        if (list.size === 0) {
            delete this.mapOfLists[node.count];
        }
        node.count += 1;
        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new doubleLinkedList_1.DoubleLinkedList();
        }
        this.mapOfLists[node.count].addNode(node);
        console.log(`Значение по ключу "${key}" взято из кеша`);
        return node.value;
    }
    put(key, value) {
        if (this.capacity === 0) {
            return;
        }
        let node = null;
        if (!this.mapOfNodes[key]) {
            if (this.capacity === this.size) {
                let smallestFrequency = Infinity;
                for (const frequency of Object.keys(this.mapOfLists)) {
                    const parsedKey = Number(frequency);
                    if (parsedKey < smallestFrequency) {
                        smallestFrequency = parsedKey;
                    }
                }
                const list = this.mapOfLists[smallestFrequency];
                const nodeToEvict = list.popLast();
                delete this.mapOfNodes[nodeToEvict.key];
                console.log(`Значение по ключу "${key}" удалено из кеша`);
                if (list.size === 0) {
                    delete this.mapOfLists[nodeToEvict.count];
                }
            }
            else {
                this.size += 1;
            }
            node = new node_1.Node(key, value);
            this.mapOfNodes[key] = node;
            console.log(`Значение по ключу "${key}" добавлено в кеш`);
        }
        else {
            node = this.mapOfNodes[key];
            const list = this.mapOfLists[node.count];
            list.removeNode(node);
            if (list.size === 0) {
                delete this.mapOfLists[node.count];
            }
            node.value = value;
            node.count += 1;
            console.log(`Значение по ключу "${key}" обновлено в кеше`);
        }
        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new doubleLinkedList_1.DoubleLinkedList();
        }
        this.mapOfLists[node.count].addNode(node);
    }
    delete(key) {
        if (!this.has(key)) {
            console.log(`Значения по ключу "${key}" нет в кеше`);
            return;
        }
        const node = this.mapOfNodes[key];
        const list = this.mapOfLists[node.count];
        list.removeNode(node);
        if (list.size === 0) {
            delete this.mapOfLists[node.count];
        }
        delete this.mapOfNodes[node.key];
        this.size -= 1;
        console.log(`Значение по ключу "${key}" удалено из кеша`);
    }
    clear() {
        this.size = 0;
        this.mapOfLists = {};
        this.mapOfNodes = {};
        console.log("Кеш очищен");
    }
    setCapacity(value) {
        this.capacity = value;
        console.log("Размер кеша изменён. Новое значение:", value);
    }
}
exports.cache = new LFUCache();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGZ1Q2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FjaGUvbGZ1Q2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseURBQXNEO0FBQ3RELGlDQUE4QjtBQUU5QixNQUFNLFFBQVE7SUFHVixZQUNZLFdBQW1CLENBQUMsRUFDcEIsT0FBZSxDQUFDLEVBQ2hCLGFBQStDLEVBQUUsRUFBRSxzQ0FBc0M7SUFDekYsYUFBbUMsRUFBRTtRQUhyQyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBdUM7UUFDakQsZUFBVSxHQUFWLFVBQVUsQ0FBMkI7UUFFN0MsV0FBVztRQUNYLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBQ0QsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNLFFBQVEsR0FBNEIsRUFBRSxDQUFDO1FBRTdDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMvQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNYLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENB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