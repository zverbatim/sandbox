package pattern.builderpattern.product;

import pattern.builderpattern.packing.Packing;
import pattern.builderpattern.packing.TubePacking;

public abstract class Poster implements Item{

    @Override
    public Packing pack(){
        return new TubePacking();
    }

    @Override
    public String toString() {
        return "Poster = " + name() + ", cost = " + cost() + ", costPacking" + pack().cost() + ", price = " + price();
    }
}
