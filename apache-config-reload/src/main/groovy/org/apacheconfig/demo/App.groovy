package org.apacheconfig.demo

class App {
    static void main(String[] args) {
        //init the file
        def file = new File("etc/this.properties")
        file.text = ""
        file << "product.color=khaki\n"
        file << "product.version=1900\n"

        // init the properties
        Reader.run()

        // check what's in
        assert Properties.config.getProperty("product.color") == "khaki"
        assert Properties.config.getProperty("product.version") == "1900"

        // add a new property
        file << "product.market=us\n"

        // force the refresh, yet working on sleep(20000)
        Properties.config.refresh()
        assert Properties.config.getProperty("product.market") == "us"
    }
}
