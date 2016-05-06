package pattern.builderpattern.product;

public class BookHemingway extends Book{
    @Override
    public String name() {
        return "Ernest Hemingway - The old man and the sea";
    }
    @Override
    public double price(){
        return 20.10;
    }

    @Override
    public double cost(){
        return 11.20;
    }

}
