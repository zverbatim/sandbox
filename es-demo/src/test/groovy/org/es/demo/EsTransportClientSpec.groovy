package org.es.demo

import org.elasticsearch.action.search.SearchResponse
import org.elasticsearch.action.search.SearchType
import org.elasticsearch.client.Client
import org.elasticsearch.common.settings.Settings
import org.elasticsearch.index.query.QueryBuilders
import org.elasticsearch.rest.RestStatus
import spock.lang.Specification
import spock.lang.Stepwise

import static org.elasticsearch.node.NodeBuilder.nodeBuilder

@Stepwise
class EsTransportClientSpec extends Specification implements InitData {

    def node
    Client client

    def setup() {
        def settings = Settings.settingsBuilder().put("path.data", pathData)
        node = nodeBuilder().settings(settings).local(true).node();
        client = node.client();
    }

    def cleanup() {
        node.close()
    }

    def "docs get indexed in ES"() {
        when:
        SearchResponse response = client.prepareSearch().execute().actionGet();

        then:
        response.status() == RestStatus.OK
        response.hits.size() >= 1
    }

    def "the mercedes is found"() {
        when:
        SearchResponse response = client
                .prepareSearch("sales")
                .setTypes("car")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(QueryBuilders.termQuery("brand", "mercedes"))
                .execute()
                .actionGet()

        then:
        response.hits[0].source.get("brand") == "mercedes"
    }
}
