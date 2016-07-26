package oracle.docs.interfaces.inheritance;

public class Animal {

    private String name;

    public Animal(String name) {
        this.name = name;
        System.out.println("Making an animal");
    }

    public void eat(){
        System.out.println("Animal is eating");
    }
}
