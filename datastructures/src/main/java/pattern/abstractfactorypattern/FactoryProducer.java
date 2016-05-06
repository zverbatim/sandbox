package pattern.abstractfactorypattern;

import pattern.abstractfactorypattern.payment.PaymentFactory;
import pattern.abstractfactorypattern.transaction.TransactionFactory;

public class FactoryProducer {
    public FactoryProducer() {
    }

    public static AbstractFactory getFactory(String choice){

        if(choice.equalsIgnoreCase("transaction")){
            return new TransactionFactory();
        } else if (choice.equalsIgnoreCase("payment")) {
            return new PaymentFactory();
        } else {
            System.out.println("Choice = " + choice + " is not supported.");
            return null;
        }
    }
}
