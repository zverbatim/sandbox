package org.apacheconfig.demo

import org.apache.commons.configuration.PropertiesConfiguration
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy

class Reader {

    static void run() {
        Properties.config = new PropertiesConfiguration("etc/this.properties")
        Properties.config.setReloadingStrategy(new FileChangedReloadingStrategy())
    }
}
