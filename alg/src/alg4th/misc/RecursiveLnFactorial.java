package alg4th.misc;

public class RecursiveLnFactorial {


    public static void main(String[] args) {
        assertEqual(factorial(5), 120);
        assertEqual(lnFactorial(5), Math.log(factorial(5)));
    }

    private static double factorial(double n) {
        if (n == 1) return 1;
        return factorial(n - 1) * n;
    }

    // ln(5!) = ln(5) + ln (4!)
    private static double lnFactorial(double n) {
        if (n == 1) return 0;
        return lnFactorial(n - 1) + Math.log(n);
    }

    private static void assertEqual(double actual, double expected) {
        if (actual != expected) {
            String message = "actual = " + actual + ", expected = " + expected;
            throw new RuntimeException(message);
        }
    }
}

/*
    range -2 10  = 12 + 1 = 13;
    n = 5;
    13 / (5) = 2.6
    i

    hashmap<int, int[]>
    --------------------------
    1: [-2, -2 + 2.6 * i)
    2: [.6, -2 + 2.6 * i)
    3: ...
    4: ...
    5: [8.4, 10)

   Solution #2
   - Merge sort
   - from low to high
   - iterate with increment +n
*/

