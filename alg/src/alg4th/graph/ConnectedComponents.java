package alg4th.graph;

import alg4th.datastructure.priorityqueue.PriorityQueueImpl;
import edu.princeton.cs.algs4.Graph;

import java.util.HashMap;
import java.util.HashSet;

/**
 * List the Components that are connected
 */
public class ConnectedComponents {

    boolean marked[];
    int groupCounter;
    int group[];

    public ConnectedComponents(Graph g) {
        int n = g.V();
        groupCounter = 0;
        marked = new boolean[n];
        group = new int[n];
        for (int i = 0; i < n; i++) {
            if (!marked[i]) {
                dfs(g, i);
                groupCounter++;
            }
        }
    }

    private void dfs(Graph g, int i) {
        // set the "id" to group
        group[i] = groupCounter;

        for (int w : g.adj(i)) {
            if (!marked[w]) {
                marked[w] = true;
                dfs(g, w);
            }
        }
    }

    public boolean connected(int a, int b) {
        return group[a] == group[b];
    }

    public HashMap<Integer, HashSet<Integer>> ccMap() {
        HashMap<Integer, HashSet<Integer>> map = new HashMap<>();
        for (int i = 0; i < group.length; i++) {

            if (marked[i]) {
                if (!map.containsKey(group[i])) {
                    HashSet<Integer> hs = new HashSet<>();
                    hs.add(i);
                    map.put(group[i], hs);
                } else {
                    HashSet<Integer> hs = map.get(group[i]);
                    hs.add(i);
                    map.put(group[i], hs);
                }
            }
        }
        return map;
    }

    public void printComponents() {
        HashMap<Integer, HashSet<Integer>> map = ccMap();
        for (Integer key : map.keySet()) {
            System.out.print(key + " | ");
            for (Integer v : map.get(key)) {
                System.out.print(v + "\t");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(20);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(0, 6);
        g.addEdge(0, 5);
        g.addEdge(4, 5);
        g.addEdge(6, 5);
        g.addEdge(4, 3);
        g.addEdge(7, 8);
        g.addEdge(9, 10);
        g.addEdge(9, 11);
        g.addEdge(9, 12);
        g.addEdge(11, 12);

        ConnectedComponents cc = new ConnectedComponents(g);
        cc.printComponents();

        PriorityQueueImpl
    }
}
