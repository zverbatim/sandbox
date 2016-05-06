package pattern.abstractfactorypattern.payment;

public class CashPayment implements Payment{

    @Override
    public String pay(){
        return "Pay with cash ...";
    }
}
