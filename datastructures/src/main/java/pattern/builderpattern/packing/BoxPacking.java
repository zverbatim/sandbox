package pattern.builderpattern.packing;

public class BoxPacking implements Packing{

    @Override
    public String pack(){
        return "Box...";
    }

    @Override
    public double cost(){
        return 5.0;
    }
}
