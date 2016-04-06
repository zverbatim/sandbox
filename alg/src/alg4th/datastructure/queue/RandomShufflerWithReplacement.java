package alg4th.datastructure.queue;


public class RandomShufflerWithReplacement {


    public static void main(String[] args) {
        int n = 20;
        int lo = 0;
        int[] t = new int[n];
        for (int i = 0; i < n; i++) {
            int random = (int) (Math.random() * (n - 1 - lo) + lo);
            t[i] = random;
            lo++;
        }

        for (int i = 0; i < n; i++) {
            System.out.print(t[i] + " ");
        }
    }
}
