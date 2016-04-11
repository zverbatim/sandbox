package alg4th.graph;

import edu.princeton.cs.algs4.Graph;
import edu.princeton.cs.algs4.Queue;

import java.util.Stack;

/**
 * Search for the shortest path
 */
public class BreadthFirstSearchPath {

    int[] edgeTo;
    boolean[] marked;
    final int start;

    public BreadthFirstSearchPath(Graph g, int start) {
        int n = g.V();
        this.start = start;
        edgeTo = new int[n];
        marked = new boolean[n];

        bfs(g, start);
    }

    private void bfs(Graph g, int s) {
        Queue<Integer> queue = new Queue<>();
        marked[s] = true;
        queue.enqueue(s);
        while (!queue.isEmpty()) {
            int v = queue.dequeue();
            for (int i : g.adj(v)) {
                if (!marked[i]) {
                    edgeTo[i] = v;
                    marked[i] = true;
                    queue.enqueue(i);
                }
            }
        }
    }

    public boolean hasPath(int w) {
        return marked[w];
    }

    public Stack<Integer> pathTo(int w) {
        if (!hasPath(w)) return null;

        Stack<Integer> path = new Stack<>();
        int i = w;
        do {
            path.push(i);
            i = edgeTo[i];

        } while (i != start);
        path.push(i);

        return path;
    }

    public static void main(String[] args) {
        Graph g = new Graph(20);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(4, 5);
        g.addEdge(6, 7);
        g.addEdge(6, 8);
        g.addEdge(8, 9);
        g.addEdge(3, 10);
        g.addEdge(10, 11);
        g.addEdge(2, 12);
        g.addEdge(12, 13);
        g.addEdge(12, 9);

        BreadthFirstSearchPath bfsp = new BreadthFirstSearchPath(g, 0);
        System.out.println("hasPath 0 to 9: " + bfsp.hasPath(9));
        Stack<Integer> path = bfsp.pathTo(9);
        while (path.size() > 0) {
            System.out.print(path.pop() + " - ");
        }
        System.out.println("end.");
    }
}
