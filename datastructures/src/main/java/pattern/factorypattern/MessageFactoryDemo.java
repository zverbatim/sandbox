package pattern.factorypattern;

public class MessageFactoryDemo {

    public static void main(String[] args) {
        MessageFactory mf = new MessageFactory();

        for (int i = 0; i < 3; i++) {
            try {
                System.out.println(mf.getMessage(i).say());
            } catch (Exception e) {
                System.out.println("Error when processing i = " + i);
                System.out.println(e);
            }
        }
    }
}
