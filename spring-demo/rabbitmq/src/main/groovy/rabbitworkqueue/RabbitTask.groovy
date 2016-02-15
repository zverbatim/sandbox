package rabbitworkqueue

import com.rabbitmq.client.Channel
import com.rabbitmq.client.Connection
import com.rabbitmq.client.ConnectionFactory
import com.rabbitmq.client.MessageProperties

public class RabbitTask {

    private final String TASK_QUEUE_NAME = "task_queue"
    private String message

    RabbitTask(String message) {
        this.message = message ?: "Hello world"
    }

    public void run() throws Exception {
        ConnectionFactory factory = new ConnectionFactory()
        factory.setHost("localhost")
        Connection connection = factory.newConnection()
        Channel channel = connection.createChannel()

        channel.queueDeclare(TASK_QUEUE_NAME, true, false, false, null)

        channel.basicPublish("", TASK_QUEUE_NAME,
                MessageProperties.PERSISTENT_TEXT_PLAIN,
                message.getBytes("UTF-8"))

        println "Sent: $message"

        channel.close()
        connection.close()
    }
}
