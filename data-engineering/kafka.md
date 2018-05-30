kafka (_K_)
===

## what is used for
- monitor data
- stream events
- log collection

Selling points:
- central repo
- allow to do historical tracking
- fast writing, with resilient architecture
- easier to bootstrap new apps by pointing to single truth version

Implications:
Requires retooling, investment in architecture and staff, new platform to maintain.

## definitions
_Event_ the data is passed. can be a customer changed the order info, a video view, a product scan.

_Producer_ makes entries in _K_

_Consumer_ reads from _K_

_Connector_ monitors for changes (DBs)

_Stream_ responds to changes

_Topic_ is a category

_Broker_ is a bucket. Distributes the load. Contains many topics. Each topic is spread out in different _Partitions_.
There is at least one lead that is master(current). If a broker goes belly up. Workload is redistributed

### params for producers:
- durability of message
- ordering/retries
- queue limit
- batching/compression

### consumers
- read from topics
- org into groups
- part divided among them
- zookeper used for coordination
 
## hardware
- RAM at least 32GB
- CPU mid size
- Disk multiple with different /log mounted
 
## install
 ```bash
# java install
sudo yum -y update
sudo yum install java

# zookeeper as a coordinator
wget http://mirrors.sonic.net/apache/kafka/1.0.0/kafka_2.11-1.0.0.tgz
tar xzvf kafka_2.11-1.0.0.tgz
cd kafka_2.11-1.0.0/
bin/zookeeper-server-start.sh config/zookeeper.properties./bin/zookeeper-server-start.sh config/zookeeper.properties

 #reduce the ram requirements for ec2 free tier
export KAFKA_HEAP_OPTS="-Xmx500M -Xms500M"
 
bin/kafka-server-start.sh config/server.properties
```

## common operations
```bash
# create topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic hello
bin/kafka-topics.sh --list --zookeeper localhost:2181

# send messages
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic hello

# receive
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic hello --from-beginning
```

multiple brokers
```bash
> cp config/server.properties config/server-1.properties
> cp config/server.properties config/server-2.properties

# Update the following properties in the new files
config/server-1.properties:
    broker.id=1
    listeners=PLAINTEXT://:9093
    log.dir=/tmp/kafka-logs-1

config/server-2.properties:
    broker.id=2
    listeners=PLAINTEXT://:9094
    log.dir=/tmp/kafka-logs-2

bin/kafka-server-start.sh config/server-1.properties
bin/kafka-server-start.sh config/server-2.properties

# make the topic replicated
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic

# describe the topic
bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic my-replicated-topic
Topic:my-replicated-topic	PartitionCount:1	ReplicationFactor:3	Configs:
	Topic: my-replicated-topic	Partition: 0	Leader: 1	Replicas: 1,2,0	Isr: 1,2,0

# Compare this to our 'hello' topic
bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic hello
Topic:hello	PartitionCount:1	ReplicationFactor:1	Configs:
	Topic: test	Partition: 0	Leader: 0	Replicas: 0	Isr: 0


#@TODO: streams processing

```


 






 


