package org.es.demo

import org.elasticsearch.client.Client
import org.elasticsearch.client.transport.TransportClient
import org.elasticsearch.common.settings.Settings
import org.elasticsearch.common.transport.InetSocketTransportAddress

class EsTransportClient {

    private static final String CLUSTER_NAME = "bank"
    private static final String HOST_NAME = "localhost"
    private static final String HOST_PORT = "9300"
    private Client client

    public void connect() {
        Settings settings = Settings.settingsBuilder()
                .put("cluster.name", CLUSTER_NAME)
                .build()

        client = TransportClient.builder()
                .settings(settings)
                .build()
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(HOST_NAME), HOST_PORT));
    }

    public void close() {
        client.close()
    }
}
