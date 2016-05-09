package binarysearchtrees;

public class BinarySearchNode<Key, Value> {
    public Key key;                     // it works as the index in array, used for binary ranking
    public Value value;
    public BinarySearchNode left;
    public BinarySearchNode right;
    public int n;                      // how many node in the subtree

    public BinarySearchNode(Key key, Value value, int n) {
        this.key = key;
        this.value = value;
        this.n = n;
    }
}
