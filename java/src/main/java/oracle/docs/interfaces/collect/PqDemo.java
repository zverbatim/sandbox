package oracle.docs.interfaces.collect;

import java.util.PriorityQueue;

public class PqDemo {


    public static void main(String[] args) {
        PriorityQueue<Double> queue = new PriorityQueue<>();

        // insert elements to queue
        queue.offer(1.2);
        queue.offer(-13.9);
        queue.offer(10.0);

        System.out.println("The queue: ");
        CollectionUtil.display(queue);

        System.out.print("Polling from queue: ");
        while (queue.size() > 0) {
            System.out.printf("%.1f%n", queue.peek());
            queue.poll();
        }
    }
}