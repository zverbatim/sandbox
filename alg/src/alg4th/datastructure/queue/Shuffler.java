package alg4th.datastructure.queue;


import java.util.*;

/**
 * Write a shuffler using a queue
 * - it's flowed ...whata' surprise
 * after 10k runs
 *
 Tests
 63154 -> 0.14034222222222223
 38740 -> 0.0860888888888889
 32324 -> 0.07183111111111111
 40226 -> 0.08939111111111112
 50278 -> 0.11172888888888889
 50535 -> 0.1123
 41015 -> 0.09114444444444444
 32583 -> 0.07240666666666666
 38204 -> 0.08489777777777778
 62941 -> 0.13986888888888888
 Sum = 1.0
 */
public class Shuffler {

    Deque<Integer> dq;
    int n;

    public Shuffler(int n) {
        this.n = n;
        this.dq = new LinkedList<>();
    }

    public void init() {
        for (int i = 0; i < n; i++) {
            if (Math.random() > 0.5) {
                dq.addFirst(i);
            } else {
                dq.addLast(i);
            }
        }
    }

    public void shuffle() {
        Deque<Integer> temp = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (Math.random() > 0.5) {
                temp.addLast(dq.poll());
            } else {
                temp.addFirst(dq.poll());
            }
        }
        dq = temp;
    }

    public void print() {
        while (dq.size() > 0) {
            System.out.print(dq.poll() + " ");
        }
        System.out.println();
    }


    public static void testRandomness() {
        final int TEST = 10000;

        // init the counter
        int[][] counter = new int[TEST][10];

        //  do the tests
        for (int i = 0; i < TEST; i++) {
            Shuffler shuffler = new Shuffler(10);
            shuffler.init();
            shuffler.shuffle();

            int j = 0;
            while (shuffler.dq.size() > 0) {
                counter[i][j] = shuffler.dq.poll();
                j++;
            }
        }

        // calc
        int[] result = new int[10];
        for (int i = 0; i < TEST; i++) {
            for (int j = 0; j < 10; j++) {
                result[j] += counter[i][j];
            }
        }

        //output
        double s = 0.0;
        for (int i = 0; i < 10; i++) {
            double rate =  (double)result[i] / (TEST  * 45);
            System.out.println(result[i] + " -> "  + rate);
            s += rate;
        }
        System.out.println("Sum = " + s);
    }

    public static void main(String[] args) {

        System.out.println("Example");
        Shuffler shuffler = new Shuffler(10);
        shuffler.init();
        shuffler.shuffle();
        shuffler.print();

        System.out.println("Tests");
        testRandomness();
    }
}
