package pattern.addapterpattern;

public class CardDevice implements CardReader{

    CardAdapter cardAdapter;

    @Override
    public void read(CardType cardType, String name) {
        if(cardType == CardType.LIBRARY){
            System.out.println("Reading library card : "  + name);
        } else if(cardType ==CardType.DISCOVER || cardType == CardType.VISA){
            cardAdapter = new CardAdapter(cardType);
            cardAdapter.read(cardType, name);
        } else {
            System.out.println("Card is not supported.");
        }
    }
}
