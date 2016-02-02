package org.jaxb.moxy.demo.custom

import javax.xml.bind.JAXBContext
import javax.xml.bind.Marshaller
import javax.xml.bind.Unmarshaller

class CustomRun {


    /**
     * Marshall an xml log it out
     */
    static void outXml() {

        Actor ralph = new Actor(1, "Ralph", "Finnes")
        Actor harvey = new Actor(2, "Harvey", "Keitel")
        Actor lea = new Actor(3, "Lea", "Seydoux")

        def castList = [new Cast("M.Gustave", ralph),
                        new Cast("Ludwig", harvey),
                        new Cast("Clotilde", lea)]

        Movie movie = new Movie(2014, "The Grand Hotel Budapest", castList)

        JAXBContext jaxbContext = JAXBContext.newInstance(Movie.class)
        Marshaller marshaller = jaxbContext.createMarshaller()
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true)
        marshaller.marshal(movie, System.out)
    }

    /**
     * Unmarshall a xml from a file
     */
    static void inXml() {
        File file = new File("src/main/groovy/org/jaxb/moxy/demo/custom/movie-actor.xml")

        JAXBContext jaxbContext = JAXBContext.newInstance(Movie.class)

        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller()
        Movie movie = (Movie) unmarshaller.unmarshal(file)

        println movie
    }


    static void main(String[] args) {
        outXml()
        inXml()
    }
}
