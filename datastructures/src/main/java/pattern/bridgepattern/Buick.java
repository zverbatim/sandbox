package pattern.bridgepattern;

public class Buick implements BuildVehicleApi {

    @Override
    public void buildVehicle(int height, int weight){
        System.out.println("Building a Buick, height = " + height + ", weight = " + weight);
    }
}
