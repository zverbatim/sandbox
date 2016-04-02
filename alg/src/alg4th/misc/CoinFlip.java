package alg4th.misc;

import java.util.HashMap;

public class CoinFlip {


    // Frequency stability example
    public static void main(String[] args) {
        int N = 20000;
        int c = 2;
        int[] flips = new int[N+1];

        HashMap<String, Integer> counter = new HashMap<>();
        String s = "";
        for (int i = 1; i <= N; i++) {
            flips[i] = Math.random() > 0.5 ? 1 : 0;
            System.out.print(flips[i]);
            s += flips[i];
            if (i % c == 0) {
                if (!counter.containsKey(s)) {
                    counter.put(s, 1);
                } else {
                    int v = counter.get(s) + 1;
                    counter.put(s, v);
                }
                // initialize the stability string
                s = "";
            }

        }

        // check the count in the hash map
        System.out.println("\ncounts");
        for (String key : counter.keySet()) {
            System.out.println(key + ": " + counter.get(key));
        }
    }
}
