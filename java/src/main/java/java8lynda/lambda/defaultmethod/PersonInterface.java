package java8lynda.lambda.defaultmethod;

public interface PersonInterface {

    String getName();

    default String prettyName() {
        return "===" + getName() + "===";
    }
}
