package org.es.demo

import org.elasticsearch.action.index.IndexResponse
import org.elasticsearch.client.Client
import spock.lang.Specification

import static org.elasticsearch.node.NodeBuilder.nodeBuilder

class EsTransportClientSpec extends Specification {

    def node
    Client client

    def setup() {
        node = nodeBuilder().local(true).node();
        client = node.client();
    }

    def cleanup() {
        node.close()
    }

    def "add new index and insert a document"() {
        when:
        Map<String, Object> json = new HashMap<String, Object>();
        json.put("car", "mercedes");
        json.put("saleDate", new Date());
        json.put("year", 2016);

        IndexResponse response = client.prepareIndex("sales", "car")
                .setSource(json)
                .get();

        then:
        response.created
        response.index == "sales"
        response.type == "car"
    }
}
