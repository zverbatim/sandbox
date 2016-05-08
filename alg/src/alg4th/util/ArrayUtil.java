package alg4th.util;

import java.util.List;

public class ArrayUtil {

    private final static int LIMIT = 100;

    public ArrayUtil() {
    }

    public Integer[] generate(int n) {
        Integer[] t = new Integer[n];
        for (int i = 0; i < n; i++) {
            t[i] = (int) (Math.random() * LIMIT) - (int) (Math.random() * LIMIT);
        }
        return t;
    }

    public void print(Comparable[] t) {
        for (int i = 0; i < t.length; i++) {
            System.out.print(t[i] + " ");
        }
        System.out.println();
    }

    public void print(List<Integer> t) {
        for (int i = 0; i < t.size(); i++) {
            System.out.print(t.get(i) + " ");
        }
        System.out.println();
    }
}
