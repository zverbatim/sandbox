# Hive with Beeline


@TODO
## Setup hive

## use the beeline command tool
```
beeline

# login w/h user/pass
!connect jdbc:hive2://

# show databases
show schemas;

# choose the default schema
use default;

# show tables inside the schema
show tables;

# describe a table
describe sales;

# query a table
select * from sales limit 5;
```

## use python 

### install dependency
```bash
sudo yum install python-pip
sudo pip install --upgrade pip
sudo yum install gcc gcc-c++ make openssl-devel python-devel.x86_64 cyrus-sasl-devel.x86_64
sudo pip install pyhs2 pandas
```

### app
small python app that displays 5 lines from sales table
```
import pyhs2
hive_connection = pyhs2.connect(host='localhost', port=10000, authMechanism='PLAIN', user='cloudera', password='cloudera', database='default')

hive_cursor = hive_connection.cursor()
hive_cursor.execute('select * from default.sales limit 5')
vals = hive_cursor.fetchall()

# print values on screen
for row in vals:
    print row
```

## create aggs in hive

```
# add the .csv file to hdfs folder
hadoop fs -put data/sales/* /data/sales

# put csv-serde file into hdfs directory /user/cloudera/
# this add the ability to work with csv file format
# https://cwiki.apache.org/confluence/display/Hive/CSV+Serde#CSVSerde-Availability
wget https://drone.io/github.com/ogrodnek/csv-serde/files/target/csv-serde-1.1.2-0.11.0-all.jar
hadoop fs -put setup/csv-serde-1.1.2-0.11.0-all.jar /user/cloudera

# add this in hue to install csv serde
add jar hdfs:///user/cloudera/csv-serde-1.1.2-0.11.0-all.jar;
```

```sql
--  setup sales database
create database sales;
use sales;
 
create external table sales (
    RowId string,
    OrderId string,
    ...
    )
row format serde 'com.bizo.hive.serde.csv.CSVSerde'
WITH SERDEPROPERTIES (
  "separatorChar" = ",",
  "quoteChar"     = '"',
  "escapeChar"    = "\\"
)
LOCATION '/raw/sales/';

--  query table to see data
select * from back_office.sales;

--  create monthly sales aggregated table
create table sales.monthly 
stored as parquet
tblproperties('parquet.compression'='SNAPPY') as
select 
    company,
    month,
    sum(amount) as total
from 
    sales
group by 
    company,
    month;

--  view results of the table
select *  from sales.monthly;
```

## create partition by frequently queried fields (aka indices)

```sql

-- create partitioned version of sales table partitioned by company name
create table sales.company_partioned(
	RowID smallint,
	OrderID int,
	...
	partitioned by(companyname_partition string)
    stored as textfile;

-- et dynamic partition mode to nonstrict
-- so records are inserted partitions are created
SET hive.exec.dynamic.partition.mode=nonstrict;

-- insert records from sales to company_partioned
insert into table sales.company_partioned partition (companyname_partition)
	select 
	  *, 
	  CompanyName
	from 
	  back_office.stage_sales;

-- check out the hdfs folder structure 
hadoop fs -ls /user/hive/warehouse/sales.db/
```

```bash
-- and each one of those folders only has data related to a company
hadoop fs -cat /user/hive/warehouse/sales.db/company_partioned/companyname_partition=ACME/*
```

```sql
-- this will go directly to the needed folder
select 
  *
from 
  sales.company_partitioned
where 
  companyname = 'ACME'

-- with explain one can see what actually happens 
explain select * ... 
```

## work with data as map/array
```sql
select 
  orders[1].items[0].price as amount
from 
  default.sales
  limit 10;
 ```

## work with structs
keywords: `explode()`, `lateral`, `view`
useful to explode the data so it can be inserted in impala (does not support complex data)

```sql
select 
  name, 
  exploded_orders
from 
  customers LATERAL VIEW explode(orders) o as exploded_orders
order by customer_name asc;
```
