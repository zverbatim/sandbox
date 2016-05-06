package pattern.builderpattern.product;

public class BookChristie extends Book{
    @Override
    public String name() {
        return "Agata Kristi - Curtain: Hercule Poirot's Last Case ";
    }

    @Override
    public double price(){
        return 15.60;
    }

    @Override
    public double cost(){
        return 10.10;
    }
}
