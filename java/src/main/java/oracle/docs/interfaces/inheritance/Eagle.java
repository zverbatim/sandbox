package oracle.docs.interfaces.inheritance;

public class Eagle extends Bird {

    public Eagle(String name) {
        super(name);
        System.out.println("Making an eagle");
    }

    @Override
    public void eat() {
        System.out.println("Eagle is eating a mouse");
    }

    public static void main(String[] args) {
        Eagle eagle = new Eagle("The bold eagle");
        eagle.fly();
        eagle.eat();
    }


}
