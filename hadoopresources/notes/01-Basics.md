# Basics

## Organize files
```bash
# make a data folder, files will be stored in different subdirectories 
# per business requirements

hadoop fs -mkdir /data
hadoop fs -mkdir /data/vendors
hadoop fs -mkdir /data/clients

# list folders
hadoop fs -ls /data

# store data
hadoop fs -put /foo/sales /data/swildcatoop fs -ls /data/sales

# delete, wildcard operator works
hadoop fs -rm /data/sales/august*
```
