package alg4th.datastructure.queue;

import alg4th.datastructure.linkedlists.Node;

/**
 * From: https://en.wikipedia.org/wiki/Josephus_problem
 * <p>
 * In computer science and mathematics, the Josephus Problem (or Josephus permutation)
 * is a theoretical problem related to a certain counting-out game.
 * People are standing in a circle waiting to be executed.
 * Counting begins at a specified point in the circle and proceeds around the circle in a specified direction.
 * After a specified number of people are skipped, the next person is executed.
 * The procedure is repeated with the remaining people, starting with the next person,
 * going in the same direction and skipping the same number of people, until only one person remains, and is freed.
 */
public class Josephus {

    public static void main(String[] args) {
        final int PEOPLE = 6;
        final int SKIP_STEP = 3;

        // init first and last
        Node first = new Node();
        first.item = 1;

        // set the order to each node
        Node current = first;
        for (int i = 2; i <= PEOPLE; i++) {
            Node person = new Node();
            person.item = i;
            current.next = person;
            current = person;
        }

        // make it a closed circle
        current.next = first;

        Node gameNode = first;
        int s = 1;

        int dropCount = 1;
        while (dropCount < PEOPLE) {
            // using such a counter because the last left node
            // will link to itself and cause a stackoverflow.

            if (SKIP_STEP == (s + 1)) {
                Node drop = gameNode.next;
                System.out.println("Dropping " + drop.item);
                gameNode.next = drop.next;
                gameNode = drop.next;
                dropCount++;
                s = 1;
            } else {
                gameNode = gameNode.next;
                s++;
            }
        }
        System.out.println("Best Position " + gameNode.item);
    }

}
