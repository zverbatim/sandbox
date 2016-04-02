package alg4th.misc;

public class ReverseArray {

    public static void main(String[] args) {
        assertReverse(reverseArray(new int[]{2, 3, 6, 7, 9, 0}), new int[]{0, 9, 7, 6, 3, 2}, true);
        assertReverse(reverseArray(new int[]{2, 3, 6}), new int[]{6, 3, 2}, true);
        assertReverse(reverseArray(new int[]{2, 3, 4, 5}), new int[]{5, 4, 3, 2}, true);
        assertReverse(reverseArray(new int[]{2, 3}), new int[]{5, 4, 3, 2}, false);
        assertReverse(reverseArray(new int[]{2, 3, 3, 4, 5}), new int[]{5, 4, 3, 2, 5}, false);
    }

    private static int[] reverseArray(int[] vector) {
        int n = vector.length;
        for (int i = 0; i < n / 2; i++) {
            int tempI = vector[i];
            vector[i] = vector[n - i - 1];
            vector[n - i - 1] = tempI;
        }
        return vector;
    }

    private static void assertReverse(int[] actual, int[] expected, boolean condition) {
        boolean test = true;
        if (actual.length != expected.length) {
            test = false;
        } else {
            for (int i = 0; i < actual.length; i++) {
                if (actual[i] != expected[i]) {
                    test = false;
                    break;
                }
            }
        }
        if (test != condition) {
            String message = "reverse failed";
            throw new RuntimeException(message);
        }
    }
}
