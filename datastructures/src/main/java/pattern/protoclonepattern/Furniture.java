package pattern.protoclonepattern;

public abstract class Furniture implements Cloneable {
    String name;
    Brand brand;

    public void setName(String name) {
        this.name = name;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public String getName() {
        return name;
    }

    public Brand getBrand() {
        return brand;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    abstract void display();
}
