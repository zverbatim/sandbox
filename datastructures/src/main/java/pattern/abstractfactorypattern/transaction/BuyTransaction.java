package pattern.abstractfactorypattern.transaction;

public class BuyTransaction implements Transaction {

    @Override
    public String complete(){
        return "Complete buy transaction ...";
    }
}
