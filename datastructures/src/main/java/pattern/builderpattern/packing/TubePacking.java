package pattern.builderpattern.packing;

public class TubePacking implements  Packing{

    @Override
    public String pack() {
        return "Tube ...";
    }

    @Override
    public double cost(){
        return 1.0;
    }
}
