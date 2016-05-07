package pattern.filterpattern;

import java.util.List;

public class AndCriteria implements Criteria {

    private Criteria firstCriteria;
    private Criteria secondCriteria;

    public AndCriteria(Criteria firstCriteria, Criteria secondCriteria) {
        this.firstCriteria = firstCriteria;
        this.secondCriteria = secondCriteria;
    }

    @Override
    public List<Laptop> meetCriteria(List<Laptop> laptops) {
        List<Laptop> firstFilter = firstCriteria.meetCriteria(laptops);
        return secondCriteria.meetCriteria(firstFilter);
    }
}
