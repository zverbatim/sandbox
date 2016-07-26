package alg4th.graph;

import edu.princeton.cs.algs4.Graph;

import java.util.Stack;

/**
 * Combine DFS + Path
 */
public class DepthFirstSearchPath {
    int count;                  //  how many are connected
    boolean[] marked;           //  if it is connected to start vertex
    int[] edgeTo;               //  last connection that was passed through
    final int start;            //  start vertex that is tested that has path to w

    public DepthFirstSearchPath(Graph g, int start) {
        this.start = start;
        int n = g.V();
        marked = new boolean[n];
        edgeTo = new int[n];
        count = 0;

        dfs(g, start);
    }

    private void dfs(Graph g, int v) {
        marked[v] = true;
        count++;
        for (int w : g.adj(v)) {
            if (!marked[w]) {
                edgeTo[w] = v;
                dfs(g, w);
            }
        }
    }

    public boolean hasPath(int w) {
        return marked[w];
    }

    // traverse the the edgeTo until hitting the start
    // make a stack out of it
    public Stack<Integer> pathTo(int w) {

        // check first if there is a path
        if (!hasPath(w)) {
            return null;
        }

        Stack<Integer> path = new Stack<>();
        int i = w;
        do {
            i = edgeTo[i];
            path.push(i);
        } while (i != start);

        return path;
    }

    public static void main(String[] args) {
        Graph g = new Graph(10);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(2, 3);
        g.addEdge(3, 4);

        DepthFirstSearchPath dfsp = new DepthFirstSearchPath(g, 0);
        System.out.println("Is there a from 0 path to 4?" + (dfsp.hasPath(4) ? "yes" : "no"));
        System.out.println("Path from 0 to 4");
        Stack<Integer> path = dfsp.pathTo(4);
        while (path.size() > 0) {
            System.out.print(path.pop() + " - ");
        }
        System.out.println("end.");
    }
}