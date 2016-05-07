package priorityqueue;


import java.util.ArrayList;
import java.util.List;

public class MaxPriorityQueue<Key extends Comparable<Key>> {

    int size;
    List<Key> list;

    public MaxPriorityQueue() {
        list = new ArrayList<Key>();

        // the list is 1 index based
        list.add(null);
        size = 0;
    }

    public void add(Key key) {
        // this avoids creating null "pockets" inside the list
        if (size + 1 < list.size()) {
            list.set(size + 1, key);
        } else {
            list.add(key);
        }
        size++;
        moveUp(size);
    }

    public Key removeMax() {
        Key max = list.get(1);
        list.set(1, list.get(size));
        list.set(size, null);
        size--;
        moveDown(1);
        return max;
    }

    private void moveDown(int k) {
        while (2 * k <= size) {
            int j = 2 * k;
            // it will be swapped with the largest child
            if (j < size && less(j, j + 1)) j++;
            if (less(j, k)) {
                break;
            }
            swap(k, j);
            k = j;
        }
    }

    private void moveUp(int k) {
        while (k > 1 && less(k / 2, k)) {
            swap(k / 2, k);
            k /= 2;
        }
    }

    private boolean less(int a, int b) {
        return list.get(a).compareTo(list.get(b)) < 0;
    }

    private void swap(int a, int b) {
        Key temp = list.get(a);
        list.set(a, list.get(b));
        list.set(b, temp);
    }

    public void display() {

        for (int i = 0; i <= size; i++) {
            System.out.print(i + "\t");
        }

        System.out.println();

        for (int i = 0; i <= size; i++) {
            System.out.print("-\t");
        }

        System.out.println();

        for (int i = 0; i <= size; i++) {
            String d = list.get(i) != null ? list.get(i).toString() : ".";
            System.out.print(d + "\t");
        }

        System.out.println();
    }
}
