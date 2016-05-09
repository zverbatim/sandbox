package binarysearchtrees;

public class BinarySearchTree<Key extends Comparable<Key>, Value> {

    BinarySearchNode root;
    Key[] keys;
    Value[] values;
    int n;

    public BinarySearchTree(int size) {
        keys = (Key[]) new Comparable[size];
        values = (Value[]) new Object[size];
    }

    public int size() {
        return n;
    }

    public int size(BinarySearchNode node) {
        return node == null ? 0 : node.n;
    }

    public boolean isEmpty() {
        return n == 0;
    }

    public Value get(Key key) {
        if (isEmpty()) {
            return null;
        }

        if (exists(key)) {
            int index = rank(key);
            return values[index];
        } else {
            return null;
        }
    }

    public int rank(Key key) {
        return rank(key, 0, size() - 1);
    }

    public int rank(Key key, int lo, int hi) {
        // base case, lo will be the inserted element position
        if (lo > hi) {
            return lo;
        }

        int mid = (hi - lo) / 2 + lo;

        int compare = key.compareTo(keys[mid]);
        if (compare < 0) {
            return rank(key, mid + 1, hi);
        } else if (compare > 0) {
            return rank(key, lo, mid - 1);
        } else {
            return mid;
        }
    }

    public boolean exists(Key key) {
        int index = rank(key);
        return index < n && keys[index].compareTo(key) == 0;
    }

    public void put(Key key, Value value) {
        int index = rank(key);

        if (exists(key)) {
            // update
            values[index] = value;
        } else {
            // add by moving all larger elements one position to the right
            for (int i = size(); i > index; i--) {
                keys[i] = keys[i - 1];
                values[i] = values[i - 1];
            }
            keys[index] = key;
            values[index] = value;
            n++;
        }
    }
}
