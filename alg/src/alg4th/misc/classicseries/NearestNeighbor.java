package alg4th.misc.classicseries;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * A person defined by name and order in line.
 * Define the nearest neighbors based of the closest values to a persone line value
 */
public class NearestNeighbor {
    private static class Person {
        String name;
        int line;

        public Person(String name, int line) {
            this.name = name;
            this.line = line;
        }
    }


    private static void friends(List<Person> pList) {
        for (Person p : pList) {

            // create a sub list from -3 to +3 based on index
            // yet we need only the first 3 element sine the list is already sorted
            int i = pList.indexOf(p);
            List<Person> temp = new ArrayList<>();
            int j = -4;
            while (j++ < 3) {
                if (j == 0) {
                    continue;
                }
                if (i + j > 0 && i + j < pList.size() - 1) {
                    Person tempP = new Person(pList.get(i + j).name, pList.get(i + j).line);
                    tempP.line -= p.line;
                    temp.add(tempP);
                }
            }

            // sort based on distance
            temp.stream().sorted((a, b) -> Integer.compare(b.line, a.line));

            //print it
            System.out.print(p.name + "-" + p.line + "\t |");
            for (int k = 0; k < 3; k++) {
                System.out.print(temp.get(k).name + "\t");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {

        List<Person> pList = new ArrayList<>();
        pList.add(new Person("ali", 30));
        pList.add(new Person("star", 42));
        pList.add(new Person("ike", 5));
        pList.add(new Person("baba", 12));
        pList.add(new Person("dom", 18));
        pList.add(new Person("kike", 50));
        pList.add(new Person("oma", 60));

        // java 1.8
        Collections.sort(pList, Comparator.comparing(person -> person.line));

        //display the neighbours
        friends(pList);
    }
}
