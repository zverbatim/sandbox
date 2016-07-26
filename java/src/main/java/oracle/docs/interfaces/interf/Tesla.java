package oracle.docs.interfaces.interf;

public class Tesla extends Vehicle {

    Tesla (String name){
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
