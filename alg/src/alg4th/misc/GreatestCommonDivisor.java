package alg4th.misc;

public class GreatestCommonDivisor {

    public static void main(String[] args) {
        assertGcd(gcd(12, 8), 4);
        assertGcd(gcd(56, 32), 8);
    }

    private static int gcd(int a, int b) {
        int remainder = a % b;
        if (remainder == 0) {
            return b;
        } else {
            return gcd(a, remainder);
        }
    }

    private static void assertGcd(int actual, int expected) {
        if (actual != expected) {
            String message = "Expected " + expected + ", but got " + actual;
            throw new RuntimeException(message);
        }
    }
}
