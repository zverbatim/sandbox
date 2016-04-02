package alg4th.dice;

public class DiceCounter {
    private String name;
    private int count = 0;

    public DiceCounter(String name) {
        this.name = name;
    }

    public void increment() {
        count++;
    }

    public int tally() {
        return count;
    }

    public String getName() {
        return name;
    }
}
