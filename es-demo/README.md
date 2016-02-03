# Elastic Search(es) demo

## About
Using the java api for es 2.1
ES is running localhost. `$ES_HOME/config/elsticsearch.yml` has:
```
# additional arguments can be changed
node.name: bank
``` 

## Testing
For running the test in idea need to have this for the VM option: `-Des.path.home=$ES_HOME`
For the `gradle test` pass is as a [jvmArgs](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.testing.Test.html)

## Docs and credits
- [Java API docs](https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/index.html)
- [ES reference docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
- [Spock github example](https://github.com/spockframework/spock-example)
- [Orr Sella turorial for ES integration testing](https://orrsella.com/2014/10/28/embedded-elasticsearch-server-for-scala-integration-tests/)

