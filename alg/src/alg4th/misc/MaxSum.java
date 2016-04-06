package alg4th.misc;

import edu.princeton.cs.algs4.StdRandom;

public class MaxSum {

    public static void print(int[] t) {
        for (int i = 0; i < t.length; i++) {
            System.out.print(t[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {

        int n = 10;
        int[] t = new int[n];

        // get a random positive and negative sequence
        for (int i = 0; i < n; i++) {
            t[i] = StdRandom.uniform(-n, n);
        }

        System.out.println("The array");
        print(t);

        int[] sum = new int[n];
        sum[0] = Math.max(0, t[0]);
        int currentMax = 0;
        int generalMax = 0;

        for (int i = 1; i < n; i++) {
            currentMax = Math.max(sum[i - 1] + t[i], 0);
            sum[i] = currentMax;
            generalMax = Math.max(generalMax, currentMax);
        }

        System.out.println("Sum array:");
        print(sum);
        System.out.println("General max = " + generalMax);
    }
}
