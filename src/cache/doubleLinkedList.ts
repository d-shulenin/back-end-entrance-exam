import { Node } from "./node";

export class DoubleLinkedList {
    left: Node; // dummy left
    right: Node; // dummy right
    size: number;

    constructor() {
        this.size = 0;
        this.left = new Node("left", -1);
        this.right = new Node("right", -1);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    addNode(node: Node) {
        this.left.next!.prev = node;
        node.prev = this.left;
        node.next = this.left.next;
        this.left.next = node;
        this.size++;
    }

    removeNode(node: Node) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.size--;
    }

    popLast(): Node {
        const last = this.right.prev as Node;
        this.removeNode(last);
        return last;
    }
}
