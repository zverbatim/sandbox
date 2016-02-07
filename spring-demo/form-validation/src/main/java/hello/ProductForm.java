package hello;

import javax.validation.constraints.*;

public class ProductForm {

    @Size(min = 2, max = 20)
    String name;

    @DecimalMin("0.01")
    double price;

    @Size(min = 2, max = 250)
    String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

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
