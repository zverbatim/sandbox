package org.es.demo

import org.elasticsearch.action.search.SearchResponse
import org.elasticsearch.client.Client
import org.elasticsearch.client.transport.TransportClient
import org.elasticsearch.common.settings.Settings
import org.elasticsearch.common.transport.InetSocketTransportAddress
import org.elasticsearch.rest.RestStatus
import spock.lang.Shared
import spock.lang.Specification

class AccountLoadDataSpec extends Specification {
    @Shared
    Client client

    def setupSpec() {
        def settings = Settings.settingsBuilder()
                .put("cluster.name", "bank")
                .build()


        client = TransportClient.builder()
                .settings(settings)
                .build()
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("localhost"), 9300));
    }

    def cleanupSpec() {
        client.close()
    }

    def "1000 docs are in the account type, bank index"() {
        when:
        SearchResponse response = client.prepareSearch("bank")
                .setTypes("account")
                .execute()
                .actionGet();

        then:
        response.status() == RestStatus.OK
        response.hits.totalHits == 1000
    }
}