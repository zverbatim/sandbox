package pattern.addapterpattern;

public class DiscoverCardReader implements AdvancedCardReader {

    @Override
    public void readGeneric(String name) {
        System.out.println("Reading bank card " + CardType.DISCOVER + " : " + name);
    }

    @Override
    public void readBank(String name) {
        //nothing
    }
}
