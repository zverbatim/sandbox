package alg4th.misc;


import java.util.Stack;

public class ExpressionEvaluation {

    private static final String OPERANDS = "*+-/";
    private static final String OPERATORS = "1234567890";

    public static void main(String[] args) {
        String expression = "1 + (2 + 5 * 3)";
        if (!valid(expression)) {
            System.out.println("Invalid expression");
            System.exit(1);
        } else {
            System.out.println(calculate(expression.replace(" ", "")));
        }
    }

    private static Integer calculate(String expression) {

        Stack<String> operands = new Stack<>();
        Stack<Integer> operators = new Stack<>();

        for (int i = 0; i < expression.length(); i++) {
            String s = expression.substring(i, i + 1);

            // ignore (
            if (s.equals("(")) {
                continue;
            }

            // enqueue operands
            if (OPERANDS.contains(s)) {
                operands.add(s);
            }

            // enqueue operators
            if (OPERATORS.contains(s)) {
                operators.add(Integer.parseInt(s));
            }

            //pop when ")"
            if (s.equals(")")) {
                String operand = operands.pop();
                Integer a = operators.pop();
                Integer b = operators.pop();
                int result = 0;
                switch (operand) {
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        result = a / b;
                        break;
                    default:
                        System.out.println("ooopsie. le error");
                }
                operators.add(result);
            }
        }
        return operators.pop();
    }

    private static boolean valid(String expression) {
        // make sure open parentheses = closed ones.
        int p = 0;
        for (int i = 0; i < expression.length(); i++) {
            char c = expression.charAt(i);
            if (c == '(') {
                p++;
            } else if (c == ')') {
                p--;
            }
        }

        return p == 0;
    }
}
