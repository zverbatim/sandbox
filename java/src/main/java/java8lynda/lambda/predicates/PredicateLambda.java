package java8lynda.lambda.predicates;

import java8lynda.lambda.model.Person;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class PredicateLambda {

    public static void main(String[] args) {

        List<Person> people = new ArrayList<>();
        people.add(new Person("Joe Doe", true));
        people.add(new Person("Joe Shmoe", true));
        people.add(new Person("Marry Poppins", false));

        Predicate<Person> hasTrueFlag = Person::isFlag;

        filterOut(people, hasTrueFlag);
    }

    private static void filterOut(List<Person> people, Predicate<Person> hasTrueFlag) {
        people.stream().filter(hasTrueFlag)
                .forEach(System.out::println);
    }
}
