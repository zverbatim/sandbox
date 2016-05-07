package pattern.addapterpattern;

public class AddapterDemo {


    public static void main(String[] args) {
        CardDevice cardDevice = new CardDevice();
        cardDevice.read(CardType.LIBRARY, "Duke Library");
        cardDevice.read(CardType.DISCOVER, "DISCOVER 0000 000");
        cardDevice.read(CardType.VISA, "VISA 0000 000");
    }
}
