package array;

import java.util.*;

public class ObjectArraySort {

    public static void main(String[] args) {
        Dog[] dogs = new Dog[3];
        dogs[0] = new Dog("German shepard", 100);
        dogs[1] = new Dog("Basset", 35);
        dogs[2] = new Dog("Shafka", 40);

        System.out.println("Ascending by weight:");
        Arrays.sort(dogs);
        display(dogs);

        System.out.println("Ascending by bread:");
        Arrays.sort(dogs, Dog.dogCompareBreadAsc);
        display(dogs);

        System.out.println("Descending by bread:");
        Arrays.sort(dogs, Dog.dogCompareBreadDesc);
        display(dogs);

        // using a list to sort
        List<Dog> dogList = new ArrayList<Dog>();
        dogList.add(new Dog("German shepard", 100));
        dogList.add(new Dog("Basset", 35));
        dogList.add(new Dog("Shafka", 40));
        System.out.println("List sorted ascending by bread:");
        Collections.sort(dogList, Dog.dogCompareBreadAsc);
    }

    public static void display(Dog[] dogs) {
        for (Dog d : dogs) {
            System.out.println(d.toString());
        }
        System.out.println();
    }
}
