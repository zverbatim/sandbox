package alg4th.string;

import java.util.HashSet;
import java.util.Set;

public class UniqueChars {

    public static boolean isUniqueChars(String str) {
        Set<Character> charSet = new HashSet<>();
        for (int i = 0; i < str.length(); i++) {
            char val = str.charAt(i);
            if (charSet.contains(val)) return false;
            charSet.add(val);
        }
        return true;
    }

    public static void main(String[] args) {
        String[] words = {"alabama", "new york", "tom tom"};
        for (String word : words) {
            System.out.println(word + ": " + isUniqueChars(word));
        }
    }
}
