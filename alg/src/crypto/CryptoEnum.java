package crypto;

public enum CryptoEnum {

    ONE_LEAP_PAD("one leap pad", 26);

    private final String name;
    private final int keys;

    CryptoEnum(String name, int keys) {
        this.name = name;
        this.keys = keys;
    }

    public int getKeys() {
        return keys;
    }
}
