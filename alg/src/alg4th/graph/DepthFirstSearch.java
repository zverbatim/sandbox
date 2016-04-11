package alg4th.graph;

import edu.princeton.cs.algs4.Graph;

/**
 * Understanding DFS
 */
public class DepthFirstSearch {
    private int count;
    private boolean[] marked;

    public DepthFirstSearch(Graph g, int v) {
        // init the marked array for each graph's vertex
        marked = new boolean[g.V()];

        // init the counter
        count = 0;

        // run the dfs to identify connected vertices
        dfs(g, v);
    }

    private void dfs(Graph g, int v) {
        marked[v] = true;
        count++;

        // recursive call to adjacent vertices
        for (int v1 : g.adj(v)) {

            // do not go there if already marked
            if (!marked[v1]) {
                dfs(g, v1);
            }
        }
    }

    public int count() {
        return count;
    }

    public boolean marked(int v1){
        return marked[v1];
    }

    // test the class
    public static void main(String[] args) {
        Graph g = new Graph(5);
        g.addEdge(0, 1);
        g.addEdge(0, 0);
        g.addEdge(2, 3);
        System.out.println(g.toString());
        assertDfs(g, 0, 4);
    }

    private static void assertDfs(Graph g, int v, int expectedCount) {
        DepthFirstSearch depthFirstSearch = new DepthFirstSearch(g, v);
        if (depthFirstSearch.count() != expectedCount) {
            String message = "Actual: " + depthFirstSearch.count() + ". " +
                    "Expected: " + expectedCount;
            throw new RuntimeException(message);
        }
    }
}
