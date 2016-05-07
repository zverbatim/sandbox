package pattern.bridgepattern;

public abstract class Vehicle {

    protected BuildVehicleApi buildVehicleApi;

    protected Vehicle(BuildVehicleApi buildVehicleApi) {
        this.buildVehicleApi = buildVehicleApi;
    }

    protected abstract void build();
}
