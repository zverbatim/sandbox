package linkedlist;

import node.Node;

public class LinkedListRemove {

    public static void main(String[] args) {

        LinkedList ll = new LinkedList();
        String[] words = {"a", "b", "c", "d"};

        for (String w : words) {
            ll.add(new Node<String>(w), true);
        }

        System.out.println("Initial Linked List: ");
        ll.print();

        System.out.println("Delete node \"z\"");
        ll.delete("z");

        System.out.println("Delete node \"a\"");
        ll.delete("a");
        ll.print();

        System.out.println("Delete node \"c\"");
        ll.delete("c");
        ll.print();

        System.out.println("Delete node \"d\"");
        ll.delete("d");
        ll.print();

        System.out.println("Delete node \"b\"");
        ll.delete("b");
        ll.print();

        System.out.println("Delete node \"z\"");
        ll.delete("z");
    }
}
