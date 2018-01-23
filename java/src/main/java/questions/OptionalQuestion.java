package questions;

import java.util.Arrays;
import java.util.Optional;
import java.util.OptionalDouble;

public class OptionalDemo {

    // foo is empty
    static void optionalIsEmpty() {
        Optional<String> foo = Optional.of("");
        if (!foo.isPresent()) {
            System.out.println(foo.toString());
        } else {
            System.out.println("foo is empty");
        }


    }

    //foo value: abc
    static void optionalHasValue() {
        Optional<String> foo = Optional.of("abc");
        if (foo.isPresent()) {
            System.out.println("foo value: " + foo.get());
        } else {
            System.out.println("foo is empty");
        }
    }

    static void optionalDoubleAggStream() {
        int[] a = {1, 2, 5, 60};

        // avg = 17.0
        OptionalDouble avg = Arrays.stream(a).average();
        System.out.println("avg = " + (avg.isPresent() ? avg.getAsDouble() : "empty"));

        // avg = empty
        avg = Arrays.stream(new int[]{}).average();
        System.out.println("avg = " + (avg.isPresent() ? avg.getAsDouble() : "empty"));
    }


    public static void main(String[] args) {
        optionalIsEmpty();
        optionalHasValue();
        optionalDoubleAggStream();
    }
}
