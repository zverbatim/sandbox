package oracle.docs.interfaces.cards;

public interface Card extends Comparable<Card> {

    Suit getSuit();
    Rank getRank();

    default String print(){
        return getSuit() + " - " + getRank();
    }
}