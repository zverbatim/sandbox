package pattern.builderpattern.shipment;

import pattern.builderpattern.product.Item;

import java.util.ArrayList;
import java.util.List;

public class Shipment {
    private List<Item> items = new ArrayList<Item>();
    private double costItems = 0;
    private double costPacking = 0;
    private double price = 0;
    private double profit = 0;

    public void addItem(Item item) {
        items.add(item);
        costItems += item.cost();
        price += item.price();
        costPacking += item.pack().cost();
        profit += price - costItems - costPacking;
    }

    public void removeItem(Item item) {
        int c = 0;
        for (Item i : items) {
            if (i.name().equalsIgnoreCase(item.name())) {
                items.remove(c);
                costItems -= item.cost();
                price -= item.price();
                costPacking -= item.pack().cost();
                profit -= price - costItems - costPacking;
                break;
            }
            c++;
        }
    }

    /**
     * List the items
     */
    public void display() {
        for (Item i : items) {
            System.out.println(i.toString());
        }
        System.out.println("Number of items = " + items.size());
        System.out.println("Price = " + price);
        System.out.println("Cost Items = " + costItems);
        System.out.println("Cost Packing = " + costPacking);
        System.out.println("===============================");
        System.out.println("Profit = " + profit);
    }
}
