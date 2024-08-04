export class Node {
    constructor(
        public key: string,
        public value: unknown,
        public prev: Node | null = null,
        public next: Node | null = null,
        public count: number = 1
    ) {}
}
