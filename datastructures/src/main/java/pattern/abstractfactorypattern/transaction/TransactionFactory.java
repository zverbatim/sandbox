package pattern.abstractfactorypattern.transaction;

import pattern.abstractfactorypattern.AbstractFactory;
import pattern.abstractfactorypattern.payment.Payment;

public class TransactionFactory extends AbstractFactory {

    @Override
    public Payment getPayment(int i) {
        return null;
    }

    @Override
    public Transaction getTransaction(int i) {
        switch (i) {
            case 0:
                return new BuyTransaction();
            case 1:
                return new SellTransaction();
            default:
                String e = "Transaction  = " + i + " is not supported.";
                System.out.println(e);
                return null;
        }
    }
}
