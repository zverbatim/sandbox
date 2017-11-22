package closure.notes;

import java.util.*;

interface Pet {
    void speak();
}

class Cat implements Pet {
    public void speak(){
        System.out.println("Miau!");
    }
}

class Dog implements Pet {
    public void speak(){
        System.out.println("Woof");
    }
}

public class PetShow {

    public static void main(String[] args) {

        List<Pet> pets = Arrays.asList(new Dog(), new Cat());

        for (Pet pet : pets) {
            pet.speak();
        }

        pets.forEach(Pet::speak);
    }
}
