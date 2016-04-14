package alg4th.misc;

import java.util.ArrayList;
import java.util.List;

/**
 * Display all possible combination for a string
 * Example: uno = uno, un1, u1o, u2, 1no, 1n1, 2n, 3
 */
public class I18N {

    List<String> combination = new ArrayList<>();

    /**
     * Append zeros to binary representation of base10 int
     *
     * @param number base10 number
     * @param length how many zeros
     * @return string representation
     */
    private String binaryRepresentation(int number, int length) {
        String binaryString = Integer.toBinaryString(number);
        for (int i = binaryString.length(); i < length; i++) {
            binaryString = "0" + binaryString;
        }
        return binaryString;
    }


    private void combination(String word) {
        int n = word.length();

        // get all the possible combination:
        // example: 000, 001, 010, 011, 100, 101, 110, 111
        for (int i = 0; i < Math.pow(2, n); i++) {

            String binaryI = binaryRepresentation(i, word.length());

            // will count consecutive "1"s
            String tempWord = "";
            int count = 0;

            // go through each element of the binary representation
            for (int j = 0; j < binaryI.length(); j++) {
                String bin = binaryI.substring(j, j + 1);
                if (bin.equals("0")) {
                    tempWord += (count == 0 ? "" : count) + word.substring(j, j + 1);
                    count = 0;
                } else {
                    count++;
                }
            }

            // handle cases when it ends in 1. like: 0011, 1111
            if (count > 0) {
                tempWord += count;
            }

            combination.add(tempWord);
        }
    }


    private void display() {
        for (String c : combination) {
            System.out.print(c + ", ");
        }
    }

    public static void main(String[] args) {
        I18N i18N = new I18N();
        i18N.combination("uno");
        i18N.display();
    }
}
