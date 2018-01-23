package questions

import spock.lang.*

/**
 * Based of this: https://stackoverflow.com/questions/30875514/spock-framework-problems-with-spying
 */
class CallingClass {

    String functionOne() {
        "one"
    }

    String functionTwo() {
        String one = functionOne()
        "some string $one"
    }
}

class SpySpec extends Specification {

    def "check that functionTwo calls functionOne"() {
        def c = Spy(CallingClass)

        when:
        def s = c.functionTwo()

        then:
        /*
            When stubbing a method on a spy, the real method no longer gets called:
            Check how many times is called and stub it.
        */
        1 * c.functionOne() >> "mocked function return"
        s == "some string mocked function return"
    }
}