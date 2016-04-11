package alg4th.graph;

import edu.princeton.cs.algs4.Graph;

public class GraphApiDemo {

    public static void main(String[] args) {
        Graph graph =  new Graph(10);
        System.out.println("Number of vertices: " + graph.V());
        System.out.println("Number of edges: " + graph.E());

        // add edges
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);
        graph.addEdge(3, 4);
        graph.addEdge(5, 4);
        graph.addEdge(0, 4);
        System.out.println("Edges after connecting the vertices: " + graph.E());

        // adjacent to a vertex
        String a = "";
        for (Object element : graph.adj(1)) {
            a += element + ", ";
        }
        a = a.substring(0, a.length()-2);
        System.out.println("Vertices adjacent to 1: " + a);
        System.out.println("Degree for 1: " + graph.degree(1));

        // string representation
        System.out.println("Graph to string: " + graph.toString());

        // compute the degree
    }
}
