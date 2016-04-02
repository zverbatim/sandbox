package crypto;

public class OneLeap {

    public static void main(String[] args) {
        String word = "hello world  !";

        CypherGenerator cg = new CypherGenerator(word);
        cg.setCypher();

        Encrypt encrypt = new Encrypt(word, cg.getCypher());
        encrypt.setEncryptedWord();
        String encWord = encrypt.getEncryptedWord();

        Decrypt decrypt = new Decrypt(encWord, cg.getCypher());
        decrypt.setDecryptedWord();

        System.out.println(word);
        System.out.println(encrypt.getEncryptedWord());
        System.out.println(decrypt.getDecryptedWord());
    }
}
