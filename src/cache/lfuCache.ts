import { DoubleLinkedList } from "./doubleLinkedList";
import { Node } from "./node";

class LFUCache {
    static instance: LFUCache;

    constructor(
        private capacity: number = 3,
        private size: number = 0,
        private mapOfLists: Record<number, DoubleLinkedList> = {}, // map frequency -> double-linked list
        private mapOfNodes: Record<string, Node> = {}
    ) {
        // синглтон
        if (LFUCache.instance) {
            return LFUCache.instance;
        }
        LFUCache.instance = this;
    }

    view() {
        const rawCache: Record<string, unknown> = {};

        for (const key in this.mapOfNodes) {
            if (Object.hasOwn(this.mapOfNodes, key)) {
                rawCache[key] = this.mapOfNodes[key].value;
            }
        }

        return rawCache;
    }

    has(key: string): boolean {
        return key in this.mapOfNodes;
    }

    get(key: string): unknown {
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
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        this.mapOfLists[node.count].addNode(node);
        console.log(`Значение по ключу "${key}" взято из кеша`);
        return node.value;
    }

    put(key: string, value: unknown): void {
        if (this.capacity === 0) {
            return;
        }

        let node: Node | null = null;

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
            } else {
                this.size += 1;
            }

            node = new Node(key, value);
            this.mapOfNodes[key] = node;
            console.log(`Значение по ключу "${key}" добавлено в кеш`);
        } else {
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
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        this.mapOfLists[node.count].addNode(node);
    }

    delete(key: string): void {
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

    clear(): void {
        this.size = 0;
        this.mapOfLists = {};
        this.mapOfNodes = {};
        console.log("Кеш очищен");
    }

    setCapacity(value: number) {
        this.capacity = value;
        console.log("Размер кеша изменён. Новое значение:", value);
    }
}

export const cache = new LFUCache();
