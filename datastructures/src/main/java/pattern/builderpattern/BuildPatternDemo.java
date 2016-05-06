package pattern.builderpattern;

import pattern.builderpattern.shipment.Shipment;
import pattern.builderpattern.shipment.ShipmentBuilder;

public class BuildPatternDemo {

    public static void main(String[] args) {
        ShipmentBuilder shipmentBuilder = new ShipmentBuilder();
        Shipment books = shipmentBuilder.bookShippment();
        Shipment posters = shipmentBuilder.posterShipment();

        books.display();
        posters.display();
    }
}
