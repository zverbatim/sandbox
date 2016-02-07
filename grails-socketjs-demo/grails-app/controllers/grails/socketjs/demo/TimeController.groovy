package grails.socketjs.demo

import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo

class TimeController {

    def index() {}

    @MessageMapping("/time")
    @SendTo("/topic/time")
    protected String hello(String message) {
        return System.currentTimeMillis() + " " + message
    }
}
