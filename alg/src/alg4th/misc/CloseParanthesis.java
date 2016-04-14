package alg4th.misc;

import java.util.Stack;

public class CloseParanthesis {

    public static void main(String[] args) {
        assertAddOpenParanthesis(addOpenParanthesis("1 + 2 ) * 3 - 4 ) * 5-6)))".replace(" ", "")), "((1+2)*((3-4)*(5-6)))");
        assertAddOpenParanthesis(addOpenParanthesis("1*2)"), "(1*2)");
        assertAddOpenParanthesis(addOpenParanthesis("0+2)*1-3))"), "((0+2)*(1-3))");
    }

    private static void assertAddOpenParanthesis(String actual, String expected) {
        if (!actual.equals(expected)) {
            String m = "Actual: " + actual + " expected: " + expected;
            throw new RuntimeException(m);
        }
    }

    private static String addOpenParanthesis(String formula) {
        Stack<String> numberStack = new Stack<>();
        Stack<String> signStack = new Stack<>();
        for (int i = 0; i < formula.length(); i++) {
            String s = "" + formula.charAt(i);

            if (isNumber(s)) {
                numberStack.push(s);
            } else if (isSign(s)) {
                signStack.push(s);
            } else if (isClosed(s)) {
                // using a and b as trick to keep the expression order
                String a = numberStack.pop();
                String b = numberStack.pop();
                String temp = "(" + b + signStack.pop() + a + ")";
                numberStack.push(temp);
            } else {
                throw new RuntimeException("unsupported char");
            }
        }

        return numberStack.pop();
    }

    private static boolean isNumber(String s) {
        return s.equals("0") || s.equals("1") || s.equals("2") || s.equals("3")
                || s.equals("4") || s.equals("5") || s.equals("6")
                || s.equals("7") || s.equals("8") || s.equals("9");
    }

    private static boolean isSign(String s) {
        return s.equals("+") || s.equals("-") || s.equals("*") || s.equals("/");
    }

    private static boolean isClosed(String s) {
        return s.equals(")");
    }
}
