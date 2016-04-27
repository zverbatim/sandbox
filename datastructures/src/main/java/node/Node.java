package node;

public class Node<Item> {
    public Item item;
    public Node next;
    public Node prev;

    public Node() {
    }

    public Node(Item item, Node prev, Node next) {
        this.item = item;
        this.prev = prev;
        this.next = next;
    }

    public Node(Item item) {
        this.item = item;
    }

    public boolean hasNext() {
        return next != null;
    }

    public boolean hasBefore() {
        return prev != null;
    }
}
