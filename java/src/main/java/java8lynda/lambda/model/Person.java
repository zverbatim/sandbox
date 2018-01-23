package java8lynda.lambda.model;

import java.util.function.Predicate;

public class Person {

    private String name;
    private boolean flag;

    public Person(String name, boolean flag) {
        this.name = name;
        this.flag = flag;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }


    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", flag=" + flag +
                '}';
    }

    public static Integer compareLength(Person a, Person b) {

        Integer aLength = a.getName().length();
        Integer bLength = b.getName().length();

        return -aLength.compareTo(bLength);
    }
}
