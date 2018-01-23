package java8lynda.lambda.methodreferences;

import java8lynda.lambda.model.Person;

import java.util.ArrayList;
import java.util.List;

class MethodReferenceInstance {

    public static void main(String[] args) {
        MethodReferenceInstance m = new MethodReferenceInstance();
        List<Person> people = m.sort();
        people.forEach(System.out::println);
    }


    private List<Person> sort() {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Joe Doe", true));
        people.add(new Person("Joe Shmoe", true));
        people.add(new Person("Marry Poppins", false));

        people.sort(this::compareLength);

        return people;
    }


    private Integer compareLength(Person a, Person b) {
        Integer aLength = a.getName().length();
        Integer bLength = b.getName().length();
        return aLength.compareTo(bLength);
    }
}
