package alg4th.dice;

public class DiceRun {

    public static void main(String[] args) {
        int n = 6000;
        int d = 6;
        DiceCounter[] counters = new DiceCounter[d + 1];

        //init counters
        for (int i = 1; i < d + 1; i++) {
            counters[i] = new DiceCounter(i + "'s");
        }

        // run experiment
        for (int i = 0; i < n; i++) {
            int run = (int) (Math.random() * 6 + 1);
            counters[run].increment();
        }

        // results
        int s = 0;
        for (int i = 1; i < d + 1; i++) {
            System.out.println( counters[i].getName()  + " : " + counters[i].tally());
            s += counters[i].tally();
        }

        System.out.println("Total tally() = " + s);

    }
}
