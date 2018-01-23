package java8lynda.stream;

import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.Stream;

public class StreamOufArray {

    public static void main(String[] args) {

        Integer[] numbers = {1, 2, 30, 45, 6, 7};

        Stream<Integer> s = Stream.of(numbers);
        Predicate<Integer> greaterTen = it -> it >= 10;
        s.filter(greaterTen)
                .forEach(System.out::println);


        // Arrays.stream on primitives[]
        int[] numbersPrimitive = {1, 2, 30, 45, 6, 7};
        Stream<Integer> s2 = Arrays.stream(numbers);
        s2.forEach(System.out::print);

    }
}
