package alg4th.string;

public class RemoveDuplicates {

    private static String remove(String word) {

        int j = 1;
        for (int i = 0; i < word.length(); i++) {
            String letter = word.substring(i, i + 1);
            if (!word.substring(0, j - 1).contains(letter)) {
                word = word.substring(0, j - 1) + letter + word.substring(j);
                j++;
            }
        }
        return word.substring(0, j - 1);
    }


    public static void main(String[] args) {
        String[] words = {"alabama", "tesco", "bread", ""};
        for (String w : words) {
            System.out.println(w + ": " + remove(w));
        }
    }
}
