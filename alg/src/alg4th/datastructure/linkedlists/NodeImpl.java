package alg4th.datastructure.linkedlists;

public class NodeImpl {

    public static void main(String[] args) {
        Node start = new Node();
        start.item = "start";

        Node second = new Node();
        second.item = "second";

        Node third = new Node();
        third.item = "third";

        start.next = second;
        second.next = third;

        Node n = start;
        while (n != null) {
            System.out.println(n.item);
            n = n.next;
        }
    }
}
