package alg4th.misc;

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class RandomImpl {

    public static void main(String[] args) {

        int n = Integer.parseInt(args[0]);
        double low = Double.parseDouble(args[1]);
        double high = Double.parseDouble(args[2]);

        double[] random = new double[n];
        for (int i = 0; i < n - 1; i++) {
            random[i] = StdRandom.uniform(low, high);
            System.out.printf("%.2f\n", random[i]);
        }

        System.out.println("Average = " + StdStats.mean(random));
    }
}
