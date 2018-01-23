package questions

import spock.lang.*

class PublisherSpec extends Specification {
    Publisher publisher = new Publisher()
    Subscriber subscriber1 = Mock()
    Subscriber subscriber2 = Mock()
    Subscriber subscriber3 = Mock()


    def setup() {
        publisher.subscribers << subscriber1
        publisher.subscribers << subscriber2
        publisher.subscribers << subscriber3
    }


    def "should send messages to all subscribers"() {
        when:
        publisher.send("hello")

        then:
        // should receive exactly one call
        1 * subscriber1.receive("hello")

        // should receive between 1 and 3 calls
        (1..3) * subscriber2.receive("hello")

        // should receive at least one call
        (1.._) * subscriber3.receive("hello")
    }

    def "check the message that is received"() {
        when:
        publisher.send("working")

        then:
        1 * subscriber1.receive("working")
        1 * subscriber2.receive("working")
        1 * subscriber3.receive("working")
    }

    def "test that receive method returns "() {
        setup:
        subscriber1.receive() >> "ok"

        when:
        publisher.send("message1")

        then:
        1 * subscriber1.receive("message2")
        1 * subscriber2.receive("message1")
    }
}