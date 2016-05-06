package pattern.abstractfactorypattern.payment;

import pattern.abstractfactorypattern.AbstractFactory;
import pattern.abstractfactorypattern.transaction.Transaction;

public class PaymentFactory extends AbstractFactory{

    @Override
    public Payment getPayment(int i){
        switch (i) {
            case 0:
                return new CashPayment();
            case 1:
                return new CreditPayment();
            default:
                String e = "Payment  = " + i + " is not supported.";
                System.out.println(e);
                return null;
        }
    }

    @Override
    public Transaction getTransaction(int i ){
        return null;
    }
}
