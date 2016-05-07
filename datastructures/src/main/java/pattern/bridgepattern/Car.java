package pattern.bridgepattern;

public class Car extends Vehicle {

    private int weight;
    private int height;

    public Car(int height, int weight, BuildVehicleApi buildVehicleApi) {
        super(buildVehicleApi);
        this.weight = weight;
        this.height = height;
    }

    @Override
    public void build() {
        this.buildVehicleApi.buildVehicle(height, weight);
    }
}
