package alg4th.misc;

import edu.princeton.cs.algs4.Draw;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.StdRandom;

import java.awt.*;

public class DrawImpl {

    public static void main(String[] args) {

        int N = 100;
        StdDraw.setCanvasSize(N*2, N*2);
        StdDraw.setPenColor(Color.LIGHT_GRAY);
        StdDraw.setXscale(0, N);
        StdDraw.setYscale(0, N * N);
        StdDraw.setPenRadius(.008);
        for (int i = 1; i <= N; i++) {
            StdDraw.point(i, i);
            StdDraw.point(i, i * i);
            StdDraw.point(i, i * Math.log(i));
        }
    }
}
