package org.apacheconfig.demo

class App {
    def file = new File(Properties.fileName)

    def init() {
        file.text = ""
        file << "product.color=khaki\n"
        file << "product.version=1900\n"
    }


    static void main(String[] args) {
        App app = new App()
        app.init()

        // initial properties
        Reader.run()

        // check what's in
        assert Properties.config.getProperty("product.color") == "khaki"
        assert Properties.config.getProperty("product.version") == "1900"

        // add a new property
        app.file << "product.market=us\n"

        // force the refresh, yet working on sleep(20000)
        Properties.config.refresh()
        assert Properties.config.getProperty("product.market") == "us"
    }
}
