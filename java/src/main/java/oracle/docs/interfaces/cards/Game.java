package oracle.docs.interfaces.cards;

public class Game {

    public static void main(String[] args) {
        StandardDeck standardDeck = new StandardDeck();
        System.out.println("Initial deck");
        System.out.println(standardDeck.deckToString());

        System.out.println("Shufle");
        standardDeck.shuffle();
        System.out.println(standardDeck.deckToString());
    }
}
