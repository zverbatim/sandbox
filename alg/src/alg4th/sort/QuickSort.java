package alg4th.sort;

import alg4th.util.ArrayUtil;

/**
 * Recreate the code from the Sedgewick book for quick sort
 */
public class QuickSort {

    Sortable sortable;
    ArrayUtil au;

    public QuickSort(Sortable sortable, ArrayUtil au) {
        this.sortable = sortable;
        this.au = au;
    }

    private void sort(Comparable[] t) {
        sort(t, 0, t.length - 1);
    }

    private void sort(Comparable[] t, int lo, int hi) {
        if (hi <= lo) {
            return;
        }
        int j = partition(t, lo, hi);
        sort(t, lo, j - 1);
        sort(t, j + 1, hi);
    }

    // basic partition
    private int partition(Comparable[] t, int lo, int hi) {
        int i = lo;
        int j = hi + 1;
        Comparable v = t[lo];
        while (true) {
            while (sortable.less(t[++i], v)) if (i == hi) break;
            while (sortable.less(v, t[--j])) if (j == lo) break;
            if (i >= j) {
                break;
            }
            sortable.exhg(t, i, j);
        }
        sortable.exhg(t, lo, j);
        return j;
    }

    // 3-way partition. think dutch flag.
    // best for cases when there are lots of duplicates key
    private void sortThreeWay(Comparable[] t, int lo, int hi) {
        if (lo >= hi) return;
        int lt = lo;
        int i = lo + 1;
        int gt = hi;
        Comparable v = t[lo];
        while (i <= gt) {
            int cmp = t[i].compareTo(v);
            if (cmp > 0) {
                sortable.exhg(t, i, gt--);
            } else if (cmp < 0) {
                sortable.exhg(t, lt++, i++);
            } else {
                i++;
            }
        }

        // recursive calls
        sort(t, lo, lt - 1);
        sort(t, gt + 1, hi);
    }

    public static void main(String[] args) {
        QuickSort qs = new QuickSort(new Sortable(), new ArrayUtil());

        // basic case
        System.out.println("basic");
        Comparable[] t = {"K", "R", "A", "T", "E", "L", "E", "P", "U", "I", "M", "Q", "C", "X", "O", "S"};
        System.out.println("Before");
        qs.au.print(t);
        qs.sort(t);
        System.out.println("After");
        qs.au.print(t);
        qs.sortable.assertIsSorted(t);

        // 3 way
        System.out.println("three way partition quick sorting");
        t = new Comparable[]{"R", "B", "W", "W", "R", "W", "B", "R", "R", "W", "B", "R"};
        System.out.println("Before");
        qs.au.print(t);
        qs.sortThreeWay(t, 0, t.length - 1);
        System.out.println("After");
        qs.au.print(t);
        qs.sortable.assertIsSorted(t);
    }
}
