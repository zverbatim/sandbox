package pattern.abstractfactorypattern.payment;

public class CreditPayment implements Payment{
    @Override
    public String pay(){
        return "Pay with credit card ...";
    }
}
