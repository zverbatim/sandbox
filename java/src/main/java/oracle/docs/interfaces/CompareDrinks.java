package oracle.docs.interfaces;

public class CompareDrinks implements Relatable, Drink {

    int pricePerVolumeUnit;
    int volume;
    double commission;

    public CompareDrinks(int pricePerVolumeUnit, int volume, double commission) {
        this.pricePerVolumeUnit = pricePerVolumeUnit;
        this.volume = volume;
        this.commission = commission;
    }

    public double calculatePrice() {
        return pricePerVolumeUnit * volume * (1 + commission);
    }

    public int isMorePricy(Drink other) {
        if (this.calculatePrice() == other.calculatePrice()){
            return 0;
        } else if(this.calculatePrice() > other.calculatePrice()){
            return 1;
        } else {
            return -1;
        }
    }

    public static void main(String[] args) {
        CompareDrinks coffee = new CompareDrinks(10, 100, 0.2);
        CompareDrinks juice = new CompareDrinks(20, 50, 0.5);

        System.out.println(coffee.isMorePricy(juice));
    }
}
