package alg4th.datastructure.linkedlists;


public class Node<Item> {
    public Item item;
    public Node next;

    public boolean hasNext() {
        return this.next != null;
    }
}
