package java8lynda.lambda.defaultmethod;

public class Person implements PersonInterface{

    private String name;

    public Person(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }
}
