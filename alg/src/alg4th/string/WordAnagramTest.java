package alg4th.string;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class WordAnagramTest {

    /**
     * Return a new word char sorted
     *
     * @param word example "alabama"
     * @return example "aaablm"
     */
    private static String sort(String word) {
        if (word.length() == 0) return "";
        if (word.length() == 1) return word;

        List<String> list = new ArrayList<>();

        for (int i = 0; i < word.length(); i++) {
            list.add(word.substring(i, i + 1));
        }

        Collections.sort(list);

        word = "";
        for (String s : list) {
            word += s;
        }

        return word;
    }

    public static void main(String[] args) {
        System.out.println("Anagram: " + sort("ala").equals(sort("aal")));
        System.out.println("Anagram: " + sort("aaaa").equals(sort("aal")));
        System.out.println("Anagram: " + sort("").equals(sort("aal")));
        System.out.println("Anagram: " + sort("").equals(sort("")));
        System.out.println("Anagram: " + sort("a").equals(sort("a")));
    }
}
