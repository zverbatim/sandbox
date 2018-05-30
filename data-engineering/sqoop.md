SQOOP
===
command line util to load data into hdfs/hive/hbase from a RDBS

## install sqoop
```bash
wget wget http://apache.mesi.com.ar/sqoop/1.4.6/sqoop-1.4.6.bin__hadoop-0.23.tar.gz
tar xzvf sqoop-1.4.6.bin__hadoop-0.23.tar.gz
sudo mkdir -p /usr/lib/sqoop
sudo mv sqoop-1.4.6.bin__hadoop-0.23/* /usr/lib/sqoop/.

# check the install
sqoop version
# 17/12/19 16:36:18 INFO sqoop.Sqoop: Running Sqoop version: 1.4.6
```

## postgres
install [postgres](https://github.com/snowplow/snowplow/wiki/Setting-up-PostgreSQL)
```bash
sudo yum -y install postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs
sudo service postgresql initdb

sudo vim /var/lib/pgsql/data/pg_hba.conf
# change the record :
# "local" is for Unix domain socket connections only
# local   all             all                                     trust

sudo service postgresql start
sudo su - postgres
psql -U postgres

# make user that will be used by sqoop
# requires restart
CREATE USER sqoop SUPERUSER;
ALTER USER sqoop WITH PASSWORD 'password';
```

init a films table
```postgresql
DROP TABLE  IF EXISTS films;
CREATE TABLE films (id SERIAL PRIMARY KEY, title varchar(255) NOT NULL);
insert into films(title) values('Dredd 3D');
insert into films(title) values('12 Years a Slave');
insert into films(title) values('2 Guns');
insert into films(title) values('47 Ronin');
insert into films(title) values('A Good Day to Die Hard');
insert into films(title) values('About Time');
insert into films(title) values('Admission');
insert into films(title) values('After Earth');
insert into films(title) values('American Hustle');
insert into films(title) values('August: Osage County');
insert into films(title) values('Beautiful Creatures');
insert into films(title) values('Blue Jasmine');
insert into films(title) values('Captain Phillips');
insert into films(title) values('Carrie');
insert into films(title) values('Cloudy with a Chance of Meatballs 2');
insert into films(title) values('Despicable Me ok');
insert into films(title) values('Don Jon');
insert into films(title) values('Elysium');
insert into films(title) values('Ender');

-- check the records
select * from films;
```

## sqoop fun
get the driver
```bash
cd /usr/lib/sqoop/lib
curl -L 'http://jdbc.postgresql.org/download/postgresql-9.2-1002.jdbc4.jar' -o postgresql-9.2-1002.jdbc4.jar
```

list the tables with sqoop
```bash
sqoop list-tables \
--connect 'jdbc:postgresql://localhost:5432/postgres' \
--username sqoop --P \
--driver org.postgresql.Driver
```

list contents
```bash
sqoop eval \
--query "select * from films" \
--connect 'jdbc:postgresql://localhost:5432/postgres' \
--username sqoop --P \
--driver org.postgresql.Driver  
```

dump to direct
```bash
sqoop import \
--connect 'jdbc:postgresql://localhost:5432/postgres' \
--username sqoop --P \
--driver org.postgresql.Driver \
--table films
```

dump to folder
```bash
sqoop import \
--connect 'jdbc:postgresql://localhost:5432/postgres' \
--username sqoop --P \
--driver org.postgresql.Driver \
--table films \
--target-dir /tmp/films_out \
--delete-target-dir 
```





