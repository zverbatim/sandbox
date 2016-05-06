package pattern.abstractfactorypattern.transaction;

public class SellTransaction implements Transaction{

    @Override
    public String complete(){
        return "Complete sell transaction ...";
    }


}
