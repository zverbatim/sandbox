package pattern.builderpattern.product;

public class PosterCasablanca extends Poster {
    @Override
    public String name() {
        return "Casablanca poster 50x30";
    }

    @Override
    public double price() {
        return 100;
    }

    @Override
    public double cost() {
        return 20;
    }
}
