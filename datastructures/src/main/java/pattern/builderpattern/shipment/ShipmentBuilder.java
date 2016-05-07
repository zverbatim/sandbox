package pattern.builderpattern.shipment;

import pattern.builderpattern.product.BookChristie;
import pattern.builderpattern.product.BookHemingway;
import pattern.builderpattern.product.PosterCasablanca;
import pattern.builderpattern.product.PosterRomanHoliday;

public class ShipmentBuilder {

    public Shipment bookShipment(){
        Shipment shipment = new Shipment();
        shipment.addItem(new BookHemingway());
        shipment.addItem(new BookChristie());
        return shipment;
    }

    public Shipment posterShipment(){
        Shipment shipment = new Shipment();
        shipment.addItem(new PosterRomanHoliday());
        shipment.addItem(new PosterCasablanca());
        return shipment;
    }
}
