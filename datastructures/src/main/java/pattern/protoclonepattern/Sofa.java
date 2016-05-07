package pattern.protoclonepattern;

import java.util.Date;

public class Sofa extends Furniture {

    public Sofa() {
        name = "Sofa";
    }

    @Override
    public void display() {
        System.out.println(new Date() + ": " + name);
    }
}
