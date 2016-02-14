package rabbithello

import com.rabbitmq.client.AMQP
import com.rabbitmq.client.Channel
import com.rabbitmq.client.Connection
import com.rabbitmq.client.ConnectionFactory
import com.rabbitmq.client.Consumer
import com.rabbitmq.client.DefaultConsumer
import com.rabbitmq.client.Envelope

/**
 * Created by imunteanu on 2/14/16.
 */
class SendReceiveApp {

    private final static String QUEUE_NAME = "hello";
    private final static String MESSAGE = "Hello world. (rabbit mq)"

    public static void main(String[] args) throws Exception{
        ConnectionFactory factory = new ConnectionFactory()
        factory.setHost("localhost")
        Connection connection =  factory.newConnection()
        Channel channel = connection.createChannel()
        channel.queueDeclare(QUEUE_NAME, false, false, false, null)

        // sending a string
        channel.basicPublish("", QUEUE_NAME, null, MESSAGE.getBytes("UTF-8"));
        println "Message sent: $MESSAGE"

        println "Waiting ..."
        sleep(3000L)

        // receiving
        Consumer consumer = new DefaultConsumer(channel) {

            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body)
                    throws IOException {
                String message = new String(body, "UTF-8");
                println "Received: $message"
            }
        };
        channel.basicConsume(QUEUE_NAME, true, consumer);

        channel.close()
        connection.close()
    }
}
