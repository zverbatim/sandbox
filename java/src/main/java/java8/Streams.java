package java8;

import java.util.Arrays;
import java.util.stream.Stream;

/**
 * by imunteanu
 * 1/17/18
 */
public class Streams {

    public static void main(String[] args) {
        int[] i = {12, 2, 3, 3, 4, 5, 20};
        Arrays.stream(i)
                .filter(it -> it > 5)
                .map(it -> it * 1000)
                .forEach(System.out::println);

    }
}
