package pattern.addapterpattern;

public class CardAdapter implements CardReader {

    AdvancedCardReader advancedCardReader;

    public CardAdapter(CardType cardType) {
        switch (cardType) {
            case VISA:
                advancedCardReader = new VisaCardReader();
                break;
            case DISCOVER:
                advancedCardReader = new DiscoverCardReader();
                break;
            default:
                throw new RuntimeException("cartType = " + cardType + " is not supported.");
        }
    }

    @Override
    public void read(CardType cardType, String name) {
        switch (cardType) {
            case VISA:
                advancedCardReader.readBank(name);
                break;
            case DISCOVER:
                advancedCardReader.readGeneric(name);
                break;
            default:
                throw new RuntimeException("cartType = " + cardType + " is not supported.");
        }
    }
}
