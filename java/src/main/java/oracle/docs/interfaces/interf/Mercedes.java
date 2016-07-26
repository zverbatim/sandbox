package oracle.docs.interfaces.interf;

public class Mercedes extends Vehicle {

    Mercedes (String name){
        super(name);
    }

    @Override
    public int co2Emmision() {
        return 100;
    }

    @Override
    public boolean isEcoFriendly() {
        return false;
    }
}
