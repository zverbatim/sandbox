package alg4th.misc;

public class ReverseString {

    private static void assertReverse(String actual, String expected) {
        if (!actual.equals(expected)) {
            String msg = "Actual: " + actual + ". Expected: " + expected;
            throw new RuntimeException(msg);
        }
    }

    private static String reverseRecursive(String s) {
        if (s.length() == 1) return s;
        return reverseRecursive(s.substring(1)) + s.charAt(0);
    }


    public static void main(String[] args) {
        assertReverse(reverseRecursive("Hello"), "olleH");
        assertReverse(reverseRecursive("123"), "321");
        assertReverse(reverseRecursive("abcd"), "dcba");
    }
}