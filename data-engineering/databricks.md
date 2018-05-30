Databricks
===

## what is ?
Databricks is a managed platform for running Apache Spark.
That means that you do not have to learn complex cluster management 
concepts nor perform tedious maintenance tasks to take advantage of Spark.

## notions
- workspace: notebooks + libs in one place. equivalent to a project
- notebooks: a sequence of code  + markdown
- cluster: to run notebooks attach to a cluster. a group of computers that look a single one 
- jobs: can be scheduled using crontab like syntax. specify timeout!
- libs: dependency for scala/python. use _maven_, _pypi_
- tables: can be stored in the memory or cluser
- apps: 3rd party integrations (i.e. tableau)
- context: `sparkcontext` as `sc` and `SQLContext` as `sqlContext` 
for apache spark 2.x there is also `SparkSession`

## data interfaces
- dataset: rdd + dataframes
- dataframe: collections of distributed `Row` (similar to _pandas_)
- rdd: resiliet distributed dataset

## use cases for fast hadoop
- streaming ETL: look for good/bad data
- data enrichment: from a RDBMS
- trigger event detection: fraud detection
- sentiment analysis
- fog computing: iot devices on separate network that trigger a sprinkler

## types of streaming
1. event-a-time. process each event. expensive :  apache storm
2. micro-batching: apache stream, spark
3. window event. non-blocking. high cost associated: apache apex (small community)

## architecture for spark

Core: Spark that is exposed through RDD API (DataFrames/DataSets)
Languages: Scala, Python, Java, R
Libs: Spark SQL. Streaming,MLLib, GraphX
Sources: HDFS, Cassandra, Hive, HBase, Postgres, CSV, JSON, ES, S3, Parquet, Kafka
Env: Docker, EC2, MESOS (container management), Open Stack, Kubernetes
Apps: sparkling H2O, sqoop, ipython, apache ambari







