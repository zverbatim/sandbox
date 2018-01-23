package java8lynda.stream;

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;

public class StreamAggregate {

    public static void main(String[] args) {
        int start = 1;
        int end = 10000;
        List<Integer> list = new ArrayList<>();
        for (int i = start; i < end; i++) {
            list.add(i);
        }

        long count = list.stream().count();
        System.out.println("count = " + count);

        long sum = list.stream().mapToInt(it -> it).sum();
        System.out.println("sum = " + sum);

        // optional wrapper used to handle better nulls
        OptionalDouble avg = list.stream().mapToInt(it -> it).average();

        if (avg.isPresent()) {
            System.out.println("avg = " + avg.getAsDouble());
        } else {
            System.out.println("avg is not present");
        }
    }
}
