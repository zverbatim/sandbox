flume plugin for rabbit mq
===

notes based of [article](https://flumenodejstutorial.wordpress.com/2014/10/21/hadoop-storing-data-in-hdfs-using-rabbitmq-flume-and-nodejs/)
plugin [git repo](https://github.com/jcustenborder/flume-ng-rabbitmq)

##prereq
these ones need to be installed plu the `.bash_profile` stuff:
```bash
export JAVA_HOME=/usr/lib/jvm/jre-openjdk

# hdfs
export HADOOP_HOME=/home/ec2-user/hadoop-2.7.3
PATH=${HADOOP_HOME}/bin:$PATH

# spark
export SPARK_HOME=/home/ec2-user/spark-2.1.0-bin-hadoop2.7
PATH=${SPARK_HOME}/bin:$PATH

# hive
export HIVE_HOME=/home/ec2-user/apache-hive-2.1.1-bin
PATH=${HIVE_HOME}/bin:$PATH

# flume
PATH=/home/ec2-user/flume-ng/bin:$PATH
```

## additional steps for flume
```bash
# dependencies
sudo yum install -y maven git

# plugin repo
git clone https://github.com/jcustenborder/flume-ng-rabbitmq.git

# build the jar
cd flume-ng
mvn package

# copy to lib folder depending where flume is isntalled
cp ../flume-ng-rabbitmq/target/flume-rabbitmq-channel-1.0-SNAPSHOT.jar /home/ec2-user/flume-ng/lib/. 
```

make the config file used by the flume-ng in `/etc/flume/conf/analytics.conf`
content of the file
```properties
analytics.sources = rabbitmq_source1
analytics.channels = file_channel
analytics.sinks = sink_to_hdfs

# Define Rabbit Source
analytics.sources.rabbitmq_source1.type = org.apache.flume.source.rabbitmq.RabbitMQSource
analytics.sources.rabbitmq_source1.hostname = 0.0.0.0
analytics.sources.rabbitmq_source1.queuename = analytics
analytics.sources.rabbitmq_source1.username = guest
analytics.sources.rabbitmq_source1.password = guest
analytics.sources.rabbitmq_source1.port = 5672
analytics.sources.rabbitmq_source1.virtualhost = /

# HDFS sinks
analytics.sinks.sink_to_hdfs.type = hdfs
analytics.sinks.sink_to_hdfs.hdfs.fileType = DataStream
analytics.sinks.sink_to_hdfs.hdfs.path = /flume/analytics
analytics.sinks.sink_to_hdfs.hdfs.filePrefix = analytics
analytics.sinks.sink_to_hdfs.hdfs.fileSuffix = .log
analytics.sinks.sink_to_hdfs.hdfs.batchSize = 1000

# Use a channel which buffers events in memory
analytics.channels.file_channel.type = file
analytics.channels.file_channel.checkpointDir = /var/flume/checkpoint
analytics.channels.file_channel.dataDirs = /var/flume/data

# Bind the source and sink to the channel
analytics.sources.rabbitmq_source1.channels = file_channel
analytics.sinks.sink_to_hdfs.channel = file_channel
```

make the folder and make sure the proper user can _rw_
```bash
sudo mkdir -p /flume/analytics
sudo mkdir -p /var/flume/checkpoint
sudo mkdir -p /var/flume/data

chown -R ec2-user:ec2-user /flume/analytics
chown -R ec2-user:ec2-user /var/flume/checkpoint
chown -R ec2-user:ec2-user /var/flume/data
```

start the agent 
```bash
flume-ng agent -c /etc/flume/conf -f /etc/flume/conf/analytics.conf -n analytics &
```

### steps to test
1. publish to queue name _analytics_
2. check if `flume-ng` does not spit errors
3. check the content of /flume/analytics

