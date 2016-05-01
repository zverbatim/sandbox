package linkedlist;

import node.Node;

public class LinkedListAdd {

    public static void main(String[] args) {

        LinkedList llHead = new LinkedList();
        LinkedList llTail = new LinkedList();
        String[] words = {"a", "b", "c", "d"};

        for (String w : words) {
            // the pass is by reference therefore create a new node
            // so it it behaves as expected
            llHead.add(new Node<String>(w), true);
//            llTail.add(new Node<String>(w), false);
        }

        System.out.println("Add to head linked list");
        llHead.print();

        System.out.println("Add to tail linked list");
        llTail.print();
    }
}
