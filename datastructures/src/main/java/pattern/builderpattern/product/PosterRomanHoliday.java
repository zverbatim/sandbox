package pattern.builderpattern.product;

public class PosterRomanHoliday extends Poster {

    @Override
    public String name() {
        return "Roman Holiday poster - 60 x 40";
    }

    @Override
    public double price() {
        return 100;
    }

    @Override
    public double cost() {
        return 15;
    }
}
