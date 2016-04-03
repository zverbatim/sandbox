package alg4th.unionfind;

public class UnionFind {
    private int[] array;
    private int counter;

    public UnionFind(int n) {
        this.counter = n;
        array = new int[n];

        for (int i = 0; i < n; i++) {
            array[i] = i;
        }
    }

    public int find(int i) {
        return array[i];
    }

    public void union(int i, int j) {
        int iId = find(i);
        int jId = find(j);

        if (iId == jId) return;

        for (int k = 0; k < array.length; k++) {
            if (array[k] == iId) {
                array[k] = jId;
            }
        }
        counter--;
    }

    public boolean connected(int i, int j) {
        return find(i) == find(j);
    }

    public int count() {
        return counter;
    }


}
