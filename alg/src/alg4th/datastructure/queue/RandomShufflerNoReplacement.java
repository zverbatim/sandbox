package alg4th.datastructure.queue;


public class RandomShufflerNoReplacement {


    public static void print(int[] t) {
        int n = t.length;
        for (int i = 0; i < n; i++) {
            System.out.print(t[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int n = 4;

        int[] t = new int[n];

        //initialize
        for (int i = 0; i < n; i++) {
            t[i] = i;
        }

        print(t);

        for (int i = 0; i < n; i++) {
            int random = (int) (Math.random() * (n - i) + i);
            int temp = t[i];
            t[i] = t[random];
            t[random] = temp;
        }

        print(t);
    }
}
