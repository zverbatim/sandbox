package oracle.docs.interfaces.cards;

import java.util.ArrayList;
import java.util.List;

public class StandardDeck implements Deck {

    List<Card> cards;
    int size;

    public StandardDeck() {
        size = 0;
        this.cards = new ArrayList<>();
        init();
    }

    public void init() {
        List<Suit> suits = Suit.list();
        List<Rank> ranks = Rank.list();

        for (Suit s : suits) {
            for (Rank r : ranks) {
                StandardCard card = new StandardCard(s, r);
                cards.add(card);
                size++;
            }
        }
    }

    public int size() {
        return this.size();
    }


    public List<Card> getCards() {
        return this.cards;
    }


    public Deck deckFactory() {
        return null;
    }


    public void addCard(Card card) {
        this.cards.add(card);
    }


    public void addCards(List<Card> cards) {
        for (Card c : cards) {
            this.cards.add(c);
        }
    }

    public void shuffle() {
        Shuffler shuffler = new Shuffler(cards.size());
        List<Card> tempCards = new ArrayList<>();
        for (int i : shuffler.getIndices()) {
            tempCards.add(cards.get(i));
        }

        cards = new ArrayList<>();
        for (Card card : tempCards) {
            cards.add(card);
        }
    }


    public void sort(Comparable<Card> c) {

    }


    public String deckToString() {
        String s = "";
        for (Card c : cards) {
            s += c.print() + "\n";
        }
        return s;
    }
}
