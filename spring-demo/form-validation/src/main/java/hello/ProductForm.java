package hello;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

public class ProductForm {

    @Size(min = 2, max = 50)
    String name;

    @Min(0)
    double price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "ProductForm: " + this.name + " for " + this.price;
    }
}
