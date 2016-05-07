package pattern.filterpattern;

import java.util.ArrayList;
import java.util.List;

public class WorkingLaptopCriteria implements Criteria {

    @Override
    public List<Laptop> meetCriteria(List<Laptop> laptops) {
        List<Laptop> laptopFilter = new ArrayList<Laptop>();

        for(Laptop l : laptops){
            if(l.working){
                laptopFilter.add(l);
            }
        }
        return laptopFilter;
    }
}
