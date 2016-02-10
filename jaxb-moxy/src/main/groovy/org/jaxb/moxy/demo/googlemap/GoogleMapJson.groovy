package org.jaxb.moxy.demo.googlemap

import org.eclipse.persistence.jaxb.JAXBContextFactory

import javax.xml.bind.JAXBContext
import javax.xml.bind.JAXBElement;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;
import java.io.*;

class GoogleMapJson {
    static void main(String[] args) throws Exception {
        Class[] clazz = [Address.class]
        JAXBContext jaxbContext = JAXBContextFactory.createContext(clazz, null);

        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        unmarshaller.setProperty("eclipselink.media-type", "application/json");
        unmarshaller.setProperty("eclipselink.json.include-root", false);

        StreamSource json = new StreamSource(new File("src/main/groovy/org/jaxb/moxy/demo/googlemap/map.json"))
        JAXBElement<Address> addressFromJSON = unmarshaller.unmarshal(json, Address.class);

        println addressFromJSON.value["city"]
        println addressFromJSON.value["state"]
        println addressFromJSON.value["street"]

        Marshaller marshaller = jaxbContext.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        marshaller.setProperty("eclipselink.media-type", "application/json");
        marshaller.setProperty("eclipselink.json.include-root", false);
        marshaller.marshal(addressFromJSON, System.out);
    }
}
