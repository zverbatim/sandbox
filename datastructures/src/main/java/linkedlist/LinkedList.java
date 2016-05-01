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

    /**
     * Set the head & tail when starting fresh
     *
     * @param node the node element
     */
    private void init(Node node) {
        head = node;
        tail = node;
        n++;
    }

    /**
     * Chain nodes
     *
     * @param node    the node element
     * @param addHead if true add to head, if false add to tail
     */
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
            head.next.prev = node;
        } else {
            temp.prev = tail;
            tail.next = node;
            tail = node;
            node.prev = temp.prev;
        }
        n++;
    }

    public void delete(Object item) {
        // nothing if empty
        if (size() == 0) {
            emptyLog();
            return;
        }

        for (Node node = head; node != null; node = node.next) {
            if (node.item == item) {
                // single element
                if (node.prev == null && node.next == null) {
                    head = null;
                    tail = null;
                }
                // remove the head case
                else if (node.prev == null & node.next != null) {
                    head = node.next;
                    head.prev = null;
                }
                // middle
                else if (node.prev != null && node.next != null) {
                    Node p = node.prev;
                    node.prev.next = node.next;
                    node.next.prev = p;
                }
                // tail
                else {
                    tail = node.prev;
                    tail.next = null;
                }

                node = null;
                n--;
                return;
            }
        }

        System.out.println("Element not found");
    }

    public void print() {
        if (size() == 0) {
            emptyLog();
            return;
        }

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


    /**
     * not the most efficient way
     */
    public void removeDups() {
        if (size() == 0) {
            emptyLog();
            return;
        }
        int c = 0;
        Node current = head;
        while (current != null) {
            Node runner = current.next;
            while (runner != null) {
                if (runner.item == current.item) {
                    delete(runner.item);
                    c++;
                }
                runner = runner.next;
            }
            current = current.next;
        }
        System.out.println("Deleted " + c + " dups");
    }

    private void emptyLog() {
        System.out.println("Empty list. Nothing to do.");
    }
}
