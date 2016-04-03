package alg4th.unionfind;

import alg4th.util.ReadUrl;

import java.util.List;

public class UnionFindSearch extends UnionFind {

    public UnionFindSearch(int n) {
        super(n);
    }

    public static void main(String[] args) {
        ReadUrl readUrl = new ReadUrl("http://algs4.cs.princeton.edu/15uf/tinyUF.txt");
        List<String> lines = readUrl.readLine();

        // # of lines
        int n = Integer.parseInt(lines.get(0));
        UnionFindSearch uf = new UnionFindSearch(n);

        for (int i = 1; i < lines.size(); i++) {
            String line  = lines.get(i);

            int [] numbers = new int[2];
//            for (String l :)
//            int[] nodes = line.sp
            System.out.println(line);
        }

    }
}
