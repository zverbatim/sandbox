package alg4th.sort;

public class MergeSort {
    Sortable sortable;

    private Comparable[] aux;

    public MergeSort(Sortable sortable) {
        this.sortable = sortable;
    }

    public void merge(Comparable[] a, int lo, int mid, int hi) {
        int i = lo, j = mid + 1;
        for (int k = lo; k <= hi; k++)
            aux[k] = a[k];
        for (int k = lo; k <= hi; k++)
            if (i > mid) {
                a[k] = aux[j++];
            } else if (j > hi) {
                a[k] = aux[i++];
            } else if (sortable.less(aux[j], aux[i])) {
                a[k] = aux[j++];
            } else {
                a[k] = aux[i++];
            }
    }

    public void sort(Comparable[] a) {
        aux = new Comparable[a.length];
        sort(a, 0, a.length - 1);
    }

    private void sort(Comparable[] a, int lo, int hi) {  // Sort a[lo..hi].
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;

        // left array sort
        sort(a, lo, mid);

        // right sort
        sort(a, mid + 1, hi);

        // merge left to right array
        merge(a, lo, mid, hi);
    }


    public static void main(String[] args) {

        MergeSort mergeSort = new MergeSort(new Sortable());
        String[] array = {"b", "z", "c", "c"};

        mergeSort.sort(array);
        mergeSort.sortable.show(array);
        mergeSort.sortable.assertIsSorted(array);
    }
}
