package alg4th.sort;

import alg4th.util.ArrayUtil;

import java.util.Arrays;
import java.util.Collections;

public class CollectionSort {

    ArrayUtil arrayUtil;

    public CollectionSort(ArrayUtil arrayUtil) {
        this.arrayUtil = arrayUtil;
    }

    public static void main(String[] args) {
        CollectionSort cs = new CollectionSort(new ArrayUtil());
        Integer[] t = cs.arrayUtil.generate(10);
        cs.arrayUtil.print(t);
        Collections.sort(Arrays.asList(t));
        cs.arrayUtil.print(t);
    }
}
