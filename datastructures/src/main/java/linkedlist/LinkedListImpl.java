package linkedlist;

import node.Node;

public class LinkedListImpl {

    public static void main(String[] args) {
        Node to  = new Node<String>();
        Node be  = new Node<String>();
        Node or  = new Node<String>();
        Node not  = new Node<String>();

        to.item = "to";
        be.item = "be";
        or.item = "or";
        not.item = "not";

        LinkedList ll = new LinkedList();
        ll.add(to);
        ll.add(be);
        ll.add(or);
        ll.add(not);

        ll.printAll();
    }
}
