Spring with rabbit mq demo
==========================

## Docs and credits
- [spring tutorial](https://spring.io/guides/gs/messaging-rabbitmq/)
- [hostname time out issue](http://stackoverflow.com/questions/24797947/os-x-and-rabbitmq-error-epmd-error-for-host-xxx-address-cannot-connect-to-ho)
- [rabbit mq docs](http://www.rabbitmq.com/documentation.html)
- [rabbit mq used tuts](http://www.rabbitmq.com/getstarted.html)
- [rabbit mq github tuts](https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/java)

## To run
```
# This is for hello.Application. Tu run a different package change `mainClassName`

# option 1: 
gradle run

# option 2
gradle build && java -jar build/libs/gs-messaging-rabbitmq-0.1.0.jar
```