package oracle.docs.interfaces.cards;

public class Shuffler {

    int n;
    int[] indices;

    public Shuffler(int n) {
        this.n = n;
        setIndices();
    }

    private void setIndices() {
        indices = new int[n];
        int[] temp = new int[n];


        // initial vals
        for (int i = 0; i < n; i++) {
            temp[i] = i;
        }

        int counter = 0;
        while (counter < n) {
            int r = (int) (Math.random() * (n - counter - 1));
            indices[counter] = temp[r];

            // once the element is picked from the list replace it with the last one.
            if (r < (n - counter - 1)) {
                temp[r] = temp[n - counter - 1];
            }

            counter++;
        }
    }

    public int[] getIndices() {
        return indices;
    }

    public void print() {
        for (int i : indices) {
            System.out.print(i + "\t");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Shuffler shuffler;
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
        shuffler = new Shuffler(5);
        shuffler.print();
    }
}
