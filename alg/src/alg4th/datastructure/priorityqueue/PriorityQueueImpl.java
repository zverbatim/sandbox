package alg4th.datastructure.priorityqueue;

import edu.princeton.cs.algs4.MaxPQ;

public class PriorityQueueImpl {

    private static void print(MaxPQ pq) {
        for (Object s : pq) {
            System.out.println(s + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {

        // init
        MaxPQ<String> pq = new MaxPQ<>();
        System.out.println("Intial size: " + pq.size());

        // insert delete the max
        pq.insert("K");
        pq.insert("L");
        pq.insert("N");
        pq.insert("M");
        pq.insert("S");
        pq.delMax();
        pq.delMax();
        pq.insert("T");
        String max = pq.delMax();
        System.out.println("Deleted max " + max);
        System.out.println("Current max = " + pq.max());
        print(pq);
    }
}
