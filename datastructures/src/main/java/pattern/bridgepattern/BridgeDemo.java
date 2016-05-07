package pattern.bridgepattern;

public class BridgeDemo {

    public static void main(String[] args) {
        Car fiat = new Car(150, 2000, new Fiat());
        Car buick = new Car(120, 400, new Buick());

        fiat.build();
        buick.build();
    }
}
