package rabbitworkqueue

import com.rabbitmq.client.AMQP
import com.rabbitmq.client.Channel
import com.rabbitmq.client.Connection
import com.rabbitmq.client.ConnectionFactory
import com.rabbitmq.client.Consumer
import com.rabbitmq.client.DefaultConsumer
import com.rabbitmq.client.Envelope


public class Worker {
    private static final String TASK_QUEUE_NAME = "task_queue"

    public static void main(String[] argv) throws Exception {

        ConnectionFactory factory = new ConnectionFactory()
        factory.setHost("localhost")
        final Connection connection = factory.newConnection()
        final Channel channel = connection.createChannel()

        channel.queueDeclare(TASK_QUEUE_NAME, true, false, false, null)
        println("Waiting for messages. To exit press CTRL+C")

        channel.basicQos(1)

        final Consumer consumer = new DefaultConsumer(channel) {
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                String message = new String(body, "UTF-8")

                println "Received: $message"
                try {
                    doWork(message)
                } finally {
                    println "Done"
                    channel.basicAck(envelope.getDeliveryTag(), false)
                }
            }
        }
        channel.basicConsume(TASK_QUEUE_NAME, false, consumer)
    }

    /**
     * Sleep 1 sec for every . in the string
     * @param task
     */
    private static void doWork(String task) {
        println "Start doWork()"
        sleep(task.count(".") * 1000)
        println "End doWork()"
    }
}