package org.apacheconfig.demo

import org.apache.commons.configuration.PropertiesConfiguration
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy

class Reader {

    static void run() {
        String file = Properties.fileName
        Properties.config = new PropertiesConfiguration(file)
        Properties.config.setReloadingStrategy(new FileChangedReloadingStrategy())
    }

    static Map<String, String> outMap() {
        Map<String, String> map = [:]
        Properties.config.getProperties().each {
            map.put(it.key as String, it.value as String)
        }
        map
    }
}
