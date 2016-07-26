package oracle.docs.interfaces.collect;

import java.util.Collection;
import java.util.Iterator;

public class CollectionUtil {

    public static void display(Collection collection) {
        Iterator iterator = collection.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
    }
}
