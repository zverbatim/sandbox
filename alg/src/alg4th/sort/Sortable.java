package alg4th.sort;

public class Sortable {

    public boolean less(Comparable a, Comparable b) {
        return a.compareTo(b) < 0;
    }

    public void exhg(Comparable[] t, int i, int j) {
        Comparable temp = t[i];
        t[i] = t[j];
        t[j] = temp;
    }

    public void show(Comparable[] t) {
        for (Comparable aT : t) {
            System.out.print(aT + " ");
        }
        System.out.println();
    }

    public boolean isSorted(Comparable[] t) {
        for (int i = 1; i < t.length; i++) {
            if (less(t[i], t[i - 1])) {
                return false;
            }
        }
        return true;
    }

    public void assertIsSorted(Comparable[]t ){
        if(!isSorted(t)){
            String msg = "Array is not sorted";
            throw new RuntimeException(msg);
        }
    }


}
