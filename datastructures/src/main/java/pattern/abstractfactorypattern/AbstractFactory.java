package pattern.abstractfactorypattern;

import pattern.abstractfactorypattern.payment.Payment;
import pattern.abstractfactorypattern.transaction.Transaction;

public abstract class AbstractFactory {

    public abstract Payment getPayment(int i);

    public abstract Transaction getTransaction(int i);
}
