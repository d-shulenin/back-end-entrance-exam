import { DoubleLinkedList } from "./doubleLinkedList";
import { Node } from "./node";

class LFUCache {
    static instance: LFUCache;

    constructor(
        private capacity: number,
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

    has(key: string): boolean {
        // TODO: добавить логирование
        return key in this.mapOfNodes;
    }

    get(key: string): unknown {
        if (!this.has(key)) {
            // TODO: добавить логирование
            return -1;
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
        // TODO: добавить логирование
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

                if (list.size === 0) {
                    delete this.mapOfLists[nodeToEvict.count];
                }
            } else {
                this.size += 1;
            }

            node = new Node(key, value);
            this.mapOfNodes[key] = node;
        } else {
            node = this.mapOfNodes[key];

            const list = this.mapOfLists[node.count];
            list.removeNode(node);

            if (list.size === 0) {
                delete this.mapOfLists[node.count];
            }

            node.value = value;
            node.count += 1;
        }

        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        this.mapOfLists[node.count].addNode(node);
        // TODO: добавить логирование
    }

    delete(key: string): void {
        if (!this.has(key)) {
            // TODO: добавить логирование
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
        // TODO: добавить логирование
    }

    clear(): void {
        // TODO: добавить логирование
        this.size = 0;
        this.mapOfLists = {};
        this.mapOfNodes = {};
    }

    setCapacity(value: number) {
        // TODO: добавить логирование
        this.capacity = value;
    }
}

export { LFUCache };
