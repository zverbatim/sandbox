package org.es.demo

import org.elasticsearch.action.index.IndexResponse
import org.elasticsearch.client.Client
import org.elasticsearch.common.settings.Settings

import static org.elasticsearch.node.NodeBuilder.nodeBuilder

trait InitData {

    def node
    Client client
    String pathData = "/tmp/esdata/"

    def setupSpec() {
        def settings = Settings.settingsBuilder().put("path.data", pathData)
        node = nodeBuilder().settings(settings).local(true).node();
        client = node.client();
        loadData()
    }

    def cleanupSpec() {
        node.close()
        new File(pathData).deleteDir()
    }

    private void loadData() {
        Map<String, Object> json = new HashMap<String, Object>();
        json.put("brand", "mercedes");
        json.put("saleDate", new Date());
        json.put("year", 2016);

        IndexResponse response = client.prepareIndex("sales", "car")
                .setSource(json)
                .get();

        // needs a little bit to index the docs
        Thread.sleep(1200L)
    }
}
