package oracle.docs.interfaces.collect;

import java.util.*;

public class CollectionsDemo {

    public static void main(String[] args) {
        int[] a = {1, 4, -5, 5, -1, 0, 3, 21, 44, 5};

        List<Integer> list = new ArrayList<Integer>();

        for (int i : a)
            list.add(i);

        System.out.println("Before sort: ");
        CollectionUtil.display(list);

        System.out.println("After sort: ");
        Collections.sort(list);
        CollectionUtil.display(list);


        System.out.println("Reverse sort: ");
        Collections.sort(list, Collections.reverseOrder());
        CollectionUtil.display(list);

        System.out.println("Shuffle: ");
        Collections.shuffle(list);
        CollectionUtil.display(list);

        System.out.println("Max element: " + Collections.max(list));
        System.out.println("Min element: " + Collections.min(list));

        System.out.println("Binary search test:");
        Collections.sort(list);
        int j = Collections.binarySearch(list, -5);
        System.out.println("Index of -5: " + j);

        int f = Collections.frequency(list, 21);
        System.out.println("How many times 21 is in the list: " + f);
    }
}
