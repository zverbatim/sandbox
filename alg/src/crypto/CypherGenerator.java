package crypto;

public class CypherGenerator {

    private String word;
    private int[] cypher;

    public CypherGenerator(String word) {
        this.word = word;
    }

    public int[] getCypher() {
        return cypher;
    }

    public void setCypher() {
        int l = this.word.length();
        this.cypher = new int[l];

        for (int i = 0; i < l; i++) {
            int c = (int) (Math.random() * (CryptoEnum.ONE_LEAP_PAD.getKeys() - 1)) + 1;
            cypher[i] = c;
        }
    }
}
