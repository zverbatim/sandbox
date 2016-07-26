package oracle.docs.interfaces.interf;

public abstract class Vehicle implements CarbonFootPrint {

    private String name;

    public Vehicle(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}
