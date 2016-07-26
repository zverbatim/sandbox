package oracle.docs.interfaces.collect;


public class Bike{

    String name;
    int price;

    public Bike(String name, int price) {
        this.name = name;
        this.price = price;
    }


//    @Override
    public int compareTo(Bike other) {
        return other.price - this.price;
    }

}
