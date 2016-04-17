package oracle.docs.interfaces.cards;

public class StandardCard implements Card {

    Suit suit;
    Rank rank;

    public StandardCard(Suit suit, Rank rank) {
        this.suit = suit;
        this.rank = rank;
    }

    public Suit getSuit() {
        return suit;
    }

    public Rank getRank() {
        return rank;
    }

    public int hashCode() {
        return (suit.getValue() - 1) % 13 + rank.getValue();
    }

    public int compareTo(Card other) {
        return this.hashCode() - other.hashCode();
    }
}
