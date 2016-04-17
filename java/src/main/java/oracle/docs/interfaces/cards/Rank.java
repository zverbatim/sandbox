package oracle.docs.interfaces.cards;

import java.util.ArrayList;
import java.util.List;

public enum Rank {
    DEUCE(2, "Two"),
    THREE(3, "Three"),
    FOUR(4, "Four"),
    FIVE(5, "Five"),
    SIX(6, "Six"),
    SEVEN(7, "Seven"),
    EIGHT(8, "Eight"),
    NINE(9, "Nine"),
    TEN(10, "Ten"),
    JACK(11, "Jack"),
    QUEEN(12, "Queen"),
    KING(13, "King"),
    ACE(14, "Ace");

    private final int value;
    private final String text;

    Rank(int value, String text) {
        this.value = value;
        this.text = text;
    }

    public int getValue() {
        return value;
    }

    public String getText() {
        return text;
    }

    public static List<Rank> list() {
        List<Rank> r = new ArrayList<>();
        for (Rank rank : Rank.values()) {
            r.add(rank);
        }
        return r;
    }
}
