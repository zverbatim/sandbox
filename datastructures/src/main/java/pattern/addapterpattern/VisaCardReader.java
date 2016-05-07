package pattern.addapterpattern;

public class VisaCardReader implements AdvancedCardReader {

    @Override
    public void readGeneric(String name) {
        // nothing
    }

    @Override
    public void readBank(String name) {
        System.out.println("Reading bank card " + CardType.VISA + " : " +
                name);
    }
}
