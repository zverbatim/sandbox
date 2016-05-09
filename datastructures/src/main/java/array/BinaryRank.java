package array;

public class BinaryRank {

    static int[] a = {1, 2, 3, 4, 5};

    public static void main(String[] args) {
        test(rank(9, 0, a.length - 1), -1);
        test(rank(1, 0, a.length - 1), 0);
        test(rank(3, 0, a.length - 1), 2);
        test(rank(5, 0, a.length - 1), 4);
    }

    private static int rank(int key, int lo, int hi) {
        if (lo > hi) {
            return -1;
        }

        int mid = (hi - lo) / 2 + lo;
        if (key > a[mid]) {
            return rank(key, mid + 1, hi);
        } else if (key < a[mid]) {
            return rank(key, lo, mid - 1);
        } else {
            return mid;
        }
    }

    public static void test(int actual, int expected) {
        if (actual != expected) {
            String m = "actual = " + actual + ", expected = " + expected;
            throw new RuntimeException("FAIL: " + m);
        }
    }
}
