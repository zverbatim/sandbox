package pattern.protoclonepattern;

import java.util.Date;

public class Chair extends Furniture {

    public Chair() {
        name = "Chair";
    }

    @Override
    public void display() {
        System.out.println(new Date() + " : " + name);
    }
}
