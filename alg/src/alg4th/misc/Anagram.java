package alg4th.misc;

public class Anagram {

    public static void main(String[] args) {

        if (args.length == 0 || args.length == 1) {
            System.out.println("invalid input. expecting 2 strings");
            System.exit(1);
        }

        String fullWord = args[0];
        String input = args[1];

        if (input.length() > fullWord.length()){
            System.out.println("input has more chars then the full word");
            System.exit(1);
        }

        for (int i = 0; i < input.length(); i++) {
            String inString = input.substring(i, i+1);
            if (!fullWord.contains(inString)) {
                System.out.println();
                System.out.println("no anagaram of input in full word");
                System.exit(0);
            }else{
                String beforeInChar = fullWord.substring(0, fullWord.indexOf(inString));
                String afterInChar = fullWord.substring(fullWord.indexOf(inString) + 1, fullWord.length());
                fullWord = beforeInChar + afterInChar;
                System.out.println("fullWord after stripping " + inString + ": " + fullWord);
            }
        }

        System.out.println("the full word" + fullWord + " contains an anagram of input" + input);
    }
}
