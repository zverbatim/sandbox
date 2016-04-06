package alg4th.sort;

public class InsertSort extends Sortable {

    Sortable sortable;

    public InsertSort(Sortable sortable) {
        this.sortable = sortable;
    }

    private void sort(Comparable[] t) {
        int n = t.length;
        for (int i = 1; i < n; i++) {
            for (int j = i; j > 0 && sortable.less(t[j], t[j - 1]); j--) {
                sortable.exhg(t, j, j - 1);
            }
        }
    }


    public static void main(String[] args) {

        InsertSort insertSort = new InsertSort(new Sortable());
        String[] array = {"bed", "bug", "dad", "yes", "zoo", "all", "bad", "yet"};

        insertSort.sort(array);
        insertSort.sortable.show(array);
        insertSort.sortable.assertIsSorted(array);
    }
}
