package alg4th.string;

/**
 * Check if one is the rotated version on the other one.
 * example: "waterbottle" is a rotation of "erbottlewat"
 */
public class StringRotateCheck {

    private static boolean isRotate(String first, String second) {
        String concat = first + first;
        return concat.contains(second);
    }

    public static void main(String[] args) {
        String[][] testCases = {{"waterbottle", "erbottlewat"}, {"", ""}, {"abra", "aabr"}};

        for (String[] comb : testCases) {
            String first = comb[0];
            String second = comb[1];
            System.out.println("first: " + first + "second: " + second + ", rotate: " + isRotate(first, second));
        }
    }
}