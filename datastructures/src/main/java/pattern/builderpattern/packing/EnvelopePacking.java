package pattern.builderpattern.packing;

public class EnvelopePacking implements Packing{

    @Override
    public String pack() {
        return "Envelope ...";
    }
    @Override
    public double cost(){
        return 0.5;
    }
}
