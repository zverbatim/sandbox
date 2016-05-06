package pattern.abstractfactorypattern;

public class AbstractFactoryDemo {

    public static void main(String[] args) {

        AbstractFactory factoryTransaction = FactoryProducer.getFactory("transaction");
        AbstractFactory factoryPayment = FactoryProducer.getFactory("payment");
        for (int i = 0; i < 3; i++) {
            try {
                System.out.println(factoryTransaction.getTransaction(i).complete());
                System.out.println(factoryPayment.getPayment(i).pay());
            } catch (Exception e) {
                String m = "Error when running for i = " + i + ".\n";
                System.out.println(m + e);
            }
        }
    }
}
