package oracle.docs.interfaces.cards;

import java.util.ArrayList;
import java.util.List;

public enum Suit {
    DIAMONDS(1, "Diamonds"),
    CLUBS(2, "Clubs"),
    HEARTS(3, "Hearts"),
    SPADES(4, "Spades");

    private final int value;
    private final String text;

    Suit(int value, String text) {
        this.value = value;
        this.text = text;
    }

    public int getValue() {
        return value;
    }

    public String getText() {
        return text;
    }

    public static List<Suit> list(){
        List <Suit> l = new ArrayList<>();
        for (Suit suit : Suit.values()) {
            l.add(suit);
        }
        return l;
    }
}
