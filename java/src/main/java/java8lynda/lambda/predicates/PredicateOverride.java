package java8lynda.lambda.predicates;

import java8lynda.lambda.model.Person;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class PredicateOverride {

    public static void main(String[] args) {

        List<Person> people = new ArrayList<>();
        people.add(new Person("Joe Doe", true));
        people.add(new Person("Joe Shmoe", true));
        people.add(new Person("Marry Poppins", false));

        Predicate<Person> hasAInName = new Predicate<Person>() {
            @Override
            public boolean test(Person person) {
                return person.getName().toLowerCase().contains("a");
            }
        };

        people.stream().filter(hasAInName)
                .forEach(System.out::println);

    }
}
