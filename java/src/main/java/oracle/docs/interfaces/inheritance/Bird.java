package oracle.docs.interfaces.inheritance;

public class Bird extends Animal{

    public Bird(String name) {
        super(name);
        System.out.println("Making a bird");
    }

    public void fly(){
        System.out.println("Bird is flying ... ");
    }

}
