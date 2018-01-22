package java8;

import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ForEachDemo {

    public static List<Integer> hailstoneSequence(final int n) {
        final List<Integer> list = new ArrayList<Integer>();
        list.add(n);
        list.add(n);
        System.out.println("list");
        System.out.println(list);

        return list;
    }


    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("foo");
        list.add("bar");
        list.add("roo");
        list.add("mar");

        AddStringConsumer consumer = new AddStringConsumer();
        list.forEach(consumer);

        System.out.println();

        list.forEach(System.out::println);
        list.forEach(it -> System.out.println(it + "-garbage"));

        ForEachDemo.hailstoneSequence(2);

    }
}
