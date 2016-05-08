package alg4th.datastructure.queue;

import alg4th.util.ArrayUtil;

import java.util.ArrayList;
import java.util.List;


/**
 * Shuffler with no for a 0...n-1 range.
 * Using the "dead" principle by placing the element at the head of the list.
 */
public class ShufflerNoReplacement {

    private int n;
    private List<Integer> list;

    public ShufflerNoReplacement(int n) {
        this.n = n;
        setRandomList();
    }

    public List<Integer> getList() {
        return list;
    }

    private void setRandomList() {
        list = new ArrayList<>(n);

        // init with 0 to n-1 values;
        for (int i = 0; i < n; i++) {
            list.add(i);
        }

        // shuffle the order
        for (int i = 0; i < n - 1; i++) {
            int randomIndex = (int) (Math.random() * (n - i)) + i;
            int randomValue = list.get(randomIndex);
            int head = list.get(i);
            list.set(i, randomValue);
            list.set(randomIndex, head);
        }
    }


    public static void testRandomness(int listSize, int numberTests) {

        int[] sumColumns = new int[listSize];
        for (int i = 0; i < numberTests; i++) {
            ShufflerNoReplacement s = new ShufflerNoReplacement(listSize);
            List<Integer> list=  s.getList();

            int j = 0;
            for(Integer l : list){
                sumColumns[j++] += l;
                System.out.print(l + ", ");
            }
        }
        System.out.println();

        //output
        int total = 0;
        for (int i = 0; i < listSize; i++) {
            double average =  (double) sumColumns[i] / numberTests;
            total += sumColumns[i];
            System.out.println(sumColumns[i] + " -> "  + average);
        }

        // final check
        int expected = (listSize) * (listSize - 1) /  2 * numberTests;
        String result = total == expected ? "PASS. ": "Fail. ";
        result += "total = " + total + ", expected = " + expected;
        System.out.println(result);
        }

    public static void main(String[] args) {
        ShufflerNoReplacement s = new ShufflerNoReplacement(20);
        ArrayUtil au = new ArrayUtil();
        System.out.println("Shuffled list: ");
        au.print(s.getList());

        System.out.println("Test the randomness: ");
        testRandomness(10, 100);
    }
}
