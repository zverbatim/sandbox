package java8;

import java.util.function.Consumer;

/**
 * by imunteanu
 * 1/16/18
 */
public class AddStringConsumer implements Consumer {
    @Override
    public void accept(Object o) {
        System.out.println(o + "-randomString");
    }
}
