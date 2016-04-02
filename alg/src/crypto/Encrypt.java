package crypto;

public class Encrypt {

    private String word;
    private int[] cypher;
    private String encryptedWord;
    private String decryptedWord;

    public Encrypt(String word, int[] cypher) {
        this.word = word;
        this.cypher = cypher;
        this.encryptedWord = "";
        this.decryptedWord = "";
    }

    public String getEncryptedWord() {
        return encryptedWord;
    }

    public String getDecryptedWord() {
        return decryptedWord;
    }

    public void setEncryptedWord() {
        int l = this.word.length();
        for (int i = 0; i < l; i++) {
            int c = cypher[i];
            char letter = word.charAt(i);
            char encryptedLetter = (char) (letter  + c);
            this.encryptedWord += encryptedLetter;
        }
    }

    public void setDecryptedWord() {
        int l = this.word.length();
        for (int i = 0; i < l; i++) {
            int c = cypher[i];
            char letter = word.charAt(i);
            char dLetter = (char) (letter  - c);
            this.decryptedWord += dLetter;
        }
    }
}
