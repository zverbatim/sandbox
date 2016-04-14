package alg4th.misc;

public class BinarySearch {

    public static void main(String[] args) {
        int[] a = {1, 2, 3, 10, 15, 20};
        assertBinarySearch(a, 10, 3);
        assertBinarySearch(a, 50, -1);
        assertBinarySearch(a, 1, 0);

        assertBinarySearchRecursive(a, 10, 3);
        assertBinarySearchRecursive(a, 50, -1);
        assertBinarySearchRecursive(a, 1, 0);
    }

    private static void assertBinarySearchRecursive(int[] a, int searchedNumber, int expectedRank) {
        if (rank(a, searchedNumber) != expectedRank) {
            String msg = "actual: " + rank(a, searchedNumber) + ", expected: " + expectedRank;
            throw new RuntimeException(msg);
        }
    }

    private static void assertBinarySearch(int[] a, int searchedNumber, int expectedRank) {
        if (rankRecursive(a, 0, a.length - 1, searchedNumber) != expectedRank) {
            String msg = "actual: " + rankRecursive(a, 0, a.length - 1, searchedNumber) + ", expected: " + expectedRank;
            throw new RuntimeException(msg);
        }
    }

    /**
     * The index of searched number using an iterative approach
     *
     * @param a              array
     * @param searchedNumber the numeber
     * @return the index, -1 if not found
     */
    private static int rank(int[] a, int searchedNumber) {
        int lo = 0;
        int hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] < searchedNumber) {
                lo = mid + 1;
            } else if (a[mid] > searchedNumber) {
                hi = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    private static int rankRecursive(int[] a, int lo, int hi, int searchedNumber) {

        if (lo > hi) {
            return -1;
        }

        int mid = (hi - lo) / 2 + lo;
        if (a[mid] > searchedNumber) {
            return rankRecursive(a, lo, mid - 1, searchedNumber);
        } else if (a[mid] < searchedNumber) {
            return rankRecursive(a, mid + 1, hi, searchedNumber);
        } else {
            return mid;
        }
    }
}
