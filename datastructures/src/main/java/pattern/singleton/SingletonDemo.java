package pattern.singleton;

import java.util.Properties;

public class SingletonDemo {

    public static void main(String[] args) {
        AppProperties p =  AppProperties.getInstance();
        p.display();
    }
}
