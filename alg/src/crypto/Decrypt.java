package crypto;

public class Decrypt {

    private String encryptedWord;
    private int[] cypher;
    private String decryptedWord;

    public Decrypt(String encryptedWord, int[] cypher) {
        this.encryptedWord = encryptedWord;
        this.cypher = cypher;
        this.decryptedWord = "";
    }

    public String getDecryptedWord() {
        return decryptedWord;
    }

    public void setDecryptedWord() {
        int l = this.encryptedWord.length();
        for (int i = 0; i < l; i++) {
            int c = cypher[i];
            char letter = encryptedWord.charAt(i);
            char dLetter = (char) (letter  - c);
            this.decryptedWord += dLetter;
        }
    }
}
