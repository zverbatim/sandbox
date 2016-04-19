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

    public void add(Node node) {
        if (tail != null) {
            tail.next = node;
        }

        if (head == null) {
            head = node;
        }

        tail = node;
        n++;
    }

    /* @TODO
    public Node delete(Node node) {
    }
    public Node delete(Object item){}
    */

    public void printAll() {
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
}
