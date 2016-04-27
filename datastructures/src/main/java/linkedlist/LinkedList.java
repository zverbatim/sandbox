package linkedlist;

import node.Node;

public class LinkedList {
    private Node head;
    private Node tail;

    private int n;

    public LinkedList() {
    }

    public int size() {
        return n;
    }

    public boolean isEmpty() {
        return n == 0;
    }

    private void init(Node node) {
        head = node;
        tail = node;
        n++;
    }

    public void add(Node node, boolean addHead) {
        // check if it's a fresh start
        if (size() == 0) {
            init(node);
            return;
        }

        // to break circular reference use separate temp node
        Node temp = new Node();
        temp.item = node.item;

        // either add to head or tail
        if (addHead) {
            head.prev = temp;
            node.next = head;
            head = node;
        } else {
            temp.prev = tail;
            tail.next = node;
            tail = node;
        }
        n++;
    }

    public void delete(Object item) {
        // nothing if empty
        if (size() == 0) return;

        // set the new head
    }

    public void print() {
        if (size() == 0) emptyLog();

        System.out.println("Linked List has " + size() + " elements");
        System.out.println("Head : " + head.item);
        System.out.println("Tail : " + tail.item);

        Node iter = head;
        int i = 0;

        while (iter != null) {
            System.out.println(i++ + " : " + iter.item);
            iter = iter.next;
        }
    }

    public void removeDups() {
        if (size() == 0) emptyLog();
        int c = 0;
        if (head == null) return;
        Node previous = head;
        Node current = previous.next;
        while (current != null) {
            Node runner = head;
            while (runner != current) { // Check for earlier dups
                if (runner.item == current.item) {
                    Node tmp = current.next; // remove current previous.next = tmp;
                    current = tmp; // update current to next node break; // all other dups have already been removed
                }
                runner = runner.next;
            }
            if (runner == current) { // current not updated - update now previous = current;
                current = current.next;
            }
        }
        System.out.println("Deleted " + c + " dups");
    }

    private void emptyLog() {
        System.out.println("Empty list. Nothing to do.");
    }
}
