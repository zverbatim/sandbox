package node;

public class Node<Item> {
    public Item item;
    public Node next;

    public Node() {}

    public Node(Item item, Node next) {
        this.item = item;
        this.next = next;
    }

    public boolean hasNext(){
        return next != null;
    }
}
