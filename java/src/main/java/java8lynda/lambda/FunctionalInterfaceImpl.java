package java8lynda.lambda;

import java.util.*;

public class FunctionalInterfaceImpl {

    public static void main(String[] args) {

        /*
          This the implementation of the functional interface.
          A functional interface has a single abstract method.
          With this line the method is defined.
         */
        SimpleFunctionalInterface l = () -> System.out.println("Simple functional interface working");
        l.doSomething();


        /*
           This one has the abstract method expecting 2 args that have to be passed in the
           lambda's method signature.
         */
        SimpleFunctionalInterfaceWithArgs l2 = (int a, int b) -> a + b;
        int out = l2.superMath(10, 20);
        System.out.println("result = " + out);


        /*
            Comparator is functional interface.
            A lambda expression can be defined to sort out a collection.
            Expects 2 args
        */
        List<Integer> list = Arrays.asList(10, -1, 2, 3, 4);
        Comparator<Integer> c = (a, b) -> b.compareTo(a);
        list.sort(c);
        System.out.println("Reversed list" + list);


        /*
            Traversing a collection with a lambda expression
        */
        System.out.println("+5 to each element");
        list.forEach(i -> System.out.print(i + 5 + " "));
        System.out.println();
        list.stream().map(i -> i + 5).forEach(i -> System.out.print(i + " "));
    }
}
