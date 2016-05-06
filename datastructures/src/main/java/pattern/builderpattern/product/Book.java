package pattern.builderpattern.product;

import pattern.builderpattern.packing.EnvelopePacking;
import pattern.builderpattern.packing.Packing;

public abstract class Book implements Item{

    @Override
    public Packing pack() {
        return new EnvelopePacking();
    }

    @Override
    public String toString() {
        return "Book = " + name() + ", cost = " + cost() + ", costPacking = " + pack().cost() + ", price = " + price();
    }
}
