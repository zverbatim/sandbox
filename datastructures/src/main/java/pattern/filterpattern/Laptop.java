package pattern.filterpattern;

public class Laptop {

    private static int counter = 0;
    private int id;
    public String type;
    public boolean working;

    public Laptop(String type, boolean working) {
        this.id = ++counter;
        this.type = type;
        this.working = working;
    }

    @Override
    public String toString(){
        return id + ": " + type + ", " + working;
    }
}
