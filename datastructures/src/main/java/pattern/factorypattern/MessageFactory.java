package pattern.factorypattern;

public class MessageFactory {

    public MessageFactory() {
    }

    public Message getMessage(int m) {
        switch (m) {
            case 0:
                return new Hi();
            case 1:
                return new Warning();
            default:
                String e = "Message  = " + m + " is not supported.";
                System.out.println(e);
                return null;

        }
    }
}
