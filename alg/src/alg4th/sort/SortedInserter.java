package alg4th.sort;

//@TODO Look into implementing an inserter susing the binary search approach
public class SortedInserter {

    private static void insert(int[] t, int call) {
        int i = 0;
        int n = t.length;
        while (call > t[i] && t[i] != -1) {
            i++;
        }

        // move everything with a position
        int temp = t[i];
        t[i] = call;
        while (temp != -1 && i < n) {
            i++;
            int next = t[i];
            t[i] = temp;
            temp = next;
        }
    }

    private static void assertOrder(int[] t) {
        for (int i = 0; i < t.length - 1; i++) {
            if (t[i] > t[i + 1]) {
                String message = t[i] + " is not less than " + t[i + 1];
                throw new RuntimeException(message);
            }
        }
    }

    public static void main(String[] args) {
        int n = 100;
        int[] calls = new int[n];

        //initialize with -1
        for (int i = 0; i < n; i++) {
            calls[i] = -1;
        }

        for (int i = 0; i < n; i++) {
            int random = (int) (Math.random() * n);
            insert(calls, random);
        }
        assertOrder(calls);
    }
}

