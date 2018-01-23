package java8lynda.lambda.methodreferences;

import java8lynda.lambda.model.Person;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class MethodReferenceStatic {

    public static void main(String[] args) {

        List<Person> people = new ArrayList<>();
        people.add(new Person("Joe Doe", true));
        people.add(new Person("Joe Shmoe", true));
        people.add(new Person("Marry Poppins", false));

        people.sort(Person::compareLength);
        people.forEach(System.out::println);
    }

}
