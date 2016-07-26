package oracle.docs.interfaces.interf;

public class Bike extends Vehicle implements CarbonFootPrint {

    public Bike(String name) {
        super(name);
    }

    @Override
    public int co2Emmision() {
        return 0;
    }

    @Override
    public boolean isEcoFriendly() {
        return true;
    }
}
