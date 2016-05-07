package pattern.filterpattern;

import java.util.ArrayList;
import java.util.List;

public class FilterDemo {

    public static void main(String[] args) {
        // init
        List<Laptop> laptops = new ArrayList<Laptop>();
        laptops.add(new Laptop("mac", true));
        laptops.add(new Laptop("mac", false));
        laptops.add(new Laptop("mac", true));
        laptops.add(new Laptop("pc", true));
        laptops.add(new Laptop("pc", false));

        // criteria
        MacLaptopCriteria macLaptopCriteria = new MacLaptopCriteria();
        WorkingLaptopCriteria workingLaptopCriteria  = new WorkingLaptopCriteria();
        AndCriteria andCriteria = new AndCriteria(macLaptopCriteria, workingLaptopCriteria);


        System.out.println("Macs:");
        display(macLaptopCriteria.meetCriteria(laptops));

        System.out.println("Only macs and working: ");
        display(andCriteria.meetCriteria(laptops));
    }

    private static void display(List<Laptop> laptops){
       for(Laptop l : laptops){
           System.out.println(l.toString());
       }
        System.out.println();
    }
}
