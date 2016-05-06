package pattern.builderpattern.product;

import pattern.builderpattern.packing.Packing;

public interface Item {
    String name();

    Packing pack();

    double price();

    double cost();
}
