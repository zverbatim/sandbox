package priorityqueue;

public class MaxPriorityQueueDemo {

    public static void main(String[] args) {
        MaxPriorityQueue<String> pq = new MaxPriorityQueue<String>();
        pq.add("Z");
        pq.add("K");
        pq.add("B");

        pq.display();
        System.out.println("Removing max " + pq.removeMax());
        pq.display();

        pq.add("C");
        pq.add("X");
        pq.add("S");

        pq.display();
        System.out.println("Removing max " + pq.removeMax());
        pq.display();


        pq.add("D");
        pq.add("I");
        pq.add("O");

        pq.display();
        System.out.println("Removing max " + pq.removeMax());
        pq.display();
    }
}
