package alg4th.misc.classicseries;

/**
 * How many zeros at the end in a n!
 */
public class FactorialZero {

    private static void assertZeros(int actual, int expected) {
        if (actual != expected) {
            String msg = "Actual: " + actual + ". Expected: " + expected;
            throw new RuntimeException(msg);
        }
    }

    private static int timesFactorIn(int n, int factor) {
        int c = 0;
        while (n % factor == 0) {
            c++;
            n /= factor;
        }
        return c;
    }

    // a zero i the product of 2 * 5 = 10
    // therefore count how many times 2 * 5 occur in the factorial
    private static int zeroCount(int n) {
        int c2 = 0;
        int c5 = 0;
        for (int i = 1; i <= n; i++) {
            c2 += timesFactorIn(i, 2);
            c5 += timesFactorIn(i, 5);
        }
        return Math.min(c2, c5);
    }

    public static void main(String[] args) {
        assertZeros(zeroCount(4), 0);
        assertZeros(zeroCount(5), 1);
        assertZeros(zeroCount(10), 2);
        assertZeros(zeroCount(100), 24);
    }
}
