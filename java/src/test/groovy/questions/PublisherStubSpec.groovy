package questions

import spock.lang.Specification


class PublisherStub {
    List<SubscriberStub> subscribers = []
    int messageCount = 0

    /**
     * `*.` is a groovy spread operator.
     * Triggers the send method on all the subscribers part of the list
     * @param message
     */
    void send(String message) {
        subscribers*.receive(message)
        messageCount++
    }
}

interface SubscriberStub {
    String receive(String message);
}


class PublisherStubSpec extends Specification {
    PublisherStub publisher = new PublisherStub()
    SubscriberStub subscriber = Stub()

    def setup() {
        publisher.subscribers << subscriber
    }


def "test what a method returns by stubbing"() {

    /*
     >> is spock syntactic sugar it
     it makes the method to return "ok" by stubbing it
     assuming that the method returns a String
     */
    setup:
    subscriber.receive(_) >> "ok"

    when:
    publisher.send("message")

    then:
    subscriber.receive("message") == "ok"
}
}