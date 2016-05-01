package linkedlist;

import node.Node;

public class LinkedListRemoveDups {

    public static void main(String[] args) {

        LinkedList ll = new LinkedList();
        String[] words = {"a", "b", "c", "d", "a", "d", "a"};

        for (String w : words) {
            ll.add(new Node<String>(w), true);
        }

        System.out.println("Initial Linked List: ");
        ll.print();

        System.out.println("After removing dups: ");
        ll.removeDups();
        ll.print();

    }
}
