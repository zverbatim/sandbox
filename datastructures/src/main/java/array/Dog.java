package array;

import java.util.Comparator;

public class Dog implements Comparable<Dog> {

    public String bread;
    public int weight;

    public Dog(String bread, int weight) {
        this.bread = bread;
        this.weight = weight;
    }

    // default by weight
    @Override
    public int compareTo(Dog other) {
        return this.weight - other.weight;
    }

    public static Comparator<Dog> dogCompareBreadAsc = new Comparator<Dog>(){
        public int compare (Dog a, Dog b){
            return a.bread.compareTo(b.bread);
        }
    };

    public static Comparator<Dog> dogCompareBreadDesc = new Comparator<Dog>(){
        public int compare (Dog a, Dog b){
            return b.bread.compareTo(a.bread);
        }
    };

    @Override
    public String toString() {
        return "Dog{" +
                "bread='" + bread + '\'' +
                ", weight=" + weight +
                '}';
    }
}
