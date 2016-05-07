package pattern.bridgepattern;

public class Fiat implements BuildVehicleApi {

    @Override
    public void buildVehicle(int height, int weight){
        System.out.println("Building a Fiat, height = " + height + ", weight = " + weight);
    }
}
