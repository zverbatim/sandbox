package alg4th.graph;

import edu.princeton.cs.algs4.Graph;

import java.util.Iterator;

/**
 * Understanding the path for a DFS
 */
public class Path {

    DepthFirstSearch depthFirstSearch;

    public Path(Graph g, int a) {
        depthFirstSearch = new DepthFirstSearch(g, a);
    }

    public boolean hasPath(int z) {
        return depthFirstSearch.marked(z);
    }

//    public Iterable<Integer> pathTo(int z) {
//    }


    public static void main(String[] args) {
        Graph g = new Graph(10);
        g.addEdge(0,1);
        g.addEdge(0,2);
        g.addEdge(1,3);

        Path p = new Path(g, 0);

        assertHasPath(p.hasPath(0), true);
        assertHasPath(p.hasPath(2), true);
        assertHasPath(p.hasPath(5), false);
    }

    private static void assertHasPath(boolean actual, boolean expected){
        if(actual!= expected){
            String message = "Actual: " + actual + ". " +
                    "Expected: " + expected;
            throw new RuntimeException(message);
        }
    }
}