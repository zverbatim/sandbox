package bitwise;

import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class HelloWorld {

    @Test
    public void shifting() {
        // 0001 << 1 = 0010
        assertEquals(1 << 1, 2);

        // 00000001 << 3 = 00001000
        assertEquals(1 << 3, 8);

        // 11000 >>  4 = 00001
        assertEquals(24 >> 4, 1);

        //10000000 00000000 00000000 00000000 >>> 1 = 01000000 00000000 00000000 00000000
        assertEquals(0x80000000 >>> 1, 0x40000000);
    }

    @Test
    public void bitMask() {
        // used for creating quick powers of 2
        int bm = 1 << 3;
        assertEquals(bm, 8);
    }

    @Test
    public void operations() {
        // ~ - The unary complement
        // & - Bitwise and
        // ^ - Bitwise exclusive or
        // | - Bitwise inclusive or

        // 1001 & 0011 = 001
        assertEquals(9 & 3, 1);

        // 1100 | 0101 = 1101
        assertEquals(12 | 5, 13);

        // 1100 ^ 0101 = 1001
        assertEquals(12 ^ 5, 9);

        // ~1100 = 0011
        assertEquals(~12, -13);
    }
}