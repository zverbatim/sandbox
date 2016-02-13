package org.apacheconfig.demo

import org.apache.commons.configuration.PropertiesConfiguration

@Singleton
class Properties {
    static String fileName = "etc/this.properties"
    static PropertiesConfiguration config
}
