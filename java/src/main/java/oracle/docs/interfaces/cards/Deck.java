package oracle.docs.interfaces.cards;

import java.util.List;

public interface Deck {

    void init();

    int size();

    List<Card> getCards();

    Deck deckFactory();

    void addCard(Card card);

    void addCards(List<Card> cards);

    void shuffle();

    void sort(Comparable<Card> c);

    String deckToString();
}
