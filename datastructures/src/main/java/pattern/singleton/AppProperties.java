package pattern.singleton;
import java.util.*;

public class AppProperties extends Properties{
    private static AppProperties instance = new AppProperties();

    // constructor cannot be called from outside
    private AppProperties() {
    }

    public static AppProperties getInstance() {
        instance.put("message", "hello");
        instance.put("date", new Date().toString());
        return instance;
    }

    public void display() {
        System.out.println("All properties: ");
        Set key = instance.keySet();
        for (Object aKey : key) {
            String k = (String) aKey;
            System.out.println(k + " : " + instance.getProperty(k));
        }
    }
}
