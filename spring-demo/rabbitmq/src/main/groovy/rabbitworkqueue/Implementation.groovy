package rabbitworkqueue

class Implementation {

    public static void main(String[] args) {

        // send the messages
        def messages = ["Wazaa", "Helo..", "Bun...a Salut"]
        messages.each {
            def task = new RabbitTask(it)
            task.run()
        }

        // pull the messages
        Worker worker = new Worker()
        worker.run()
    }
}
