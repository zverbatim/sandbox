package oracle.docs.interfaces.collect;

import java.util.EmptyStackException;
import java.util.Stack;

public class StackDemo {

    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();

        s.push(100);
        s.push(1);
        s.push(43);

        System.out.println("Peek: " + s.peek());
        System.out.println("The stack: " + s);
        System.out.println("Pop: " + s.pop());
        System.out.println("The stack: " + s);


        try {
            s.pop();
            s.pop();
            s.pop();
        } catch (EmptyStackException e) {
            System.out.println("Stack is empty :/");
            e.printStackTrace();
        }
    }
}
