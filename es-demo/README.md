# Elastic Search (es) demo

## About
Using the java api for es 2.2

## Testing
The `local(true)` fore node means that is will be started with the JVM when running the test and it will discover and form a cluster.
When running from idea, set the VM option: `-Des.path.home=$ES_HOME`
While for `gradle test` - pass inside the test closure this property for [jvmArgs](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.testing.Test.html)

## Docs and credits
- [Java API docs](https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/index.html)
- [ES reference docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
- [Spock github example](https://github.com/spockframework/spock-example)
- [Orr Sella tutorial for ES integration testing](https://orrsella.com/2014/10/28/embedded-elasticsearch-server-for-scala-integration-tests/)

## Steps
1. Set the `node.name` form `$ES_HOME/config/elsticsearch.yml` to
    ```
    # additional properties can be changed
    node.name: bank
    ```
2. Run `./elasticsearch`. For dev purposes can run first on localhost.
3. Load `etc/accounts.json`. File is from the [es search documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/_exploring_your_data.html).
    ```
    # to load
    $ curl -XPOST 'localhost:9200/bank/account/_bulk?pretty' --data-binary "@accounts.json"
    # see how many are in the index
    $ curl 'localhost:9200/_cat/indices?v'
    ```