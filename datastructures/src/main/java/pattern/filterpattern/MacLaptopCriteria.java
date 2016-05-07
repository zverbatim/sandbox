package pattern.filterpattern;

import java.util.ArrayList;
import java.util.List;

public class MacLaptopCriteria implements Criteria {

    @Override
    public List<Laptop> meetCriteria(List<Laptop> laptops) {
        List<Laptop> laptopFilter = new ArrayList<Laptop>();

        for(Laptop l : laptops){
            if(l.type.equalsIgnoreCase("mac")){
                laptopFilter.add(l);
            }
        }
        return laptopFilter;
    }
}
