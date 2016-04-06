package alg4th.sort;

public class SelectSort extends Sortable {

    Sortable sortable;

    public SelectSort(Sortable sortable) {
        this.sortable = sortable;
    }

    private void sort(Comparable[] t) {
        int n = t.length;
        for (int i = 0; i < n; i++) {
            int min = i;
            for (int j = i + 1; j < n; j++) {
                if (sortable.less(t[j], t[min])) {
                    min = j;
                }
            }
            sortable.exhg(t, i, min);
        }
    }


    public static void main(String[] args) {

        SelectSort selectSort = new SelectSort(new Sortable());
        String[] array =  {"b", "z", "c", "c"};
        selectSort.sort(array);

        selectSort.sortable.assertIsSorted(array);
    }
}
