package org.jaxb.moxy.demo.basic

import javax.xml.bind.JAXBContext
import javax.xml.bind.JAXBElement
import javax.xml.bind.JAXBException
import javax.xml.bind.Marshaller
import javax.xml.namespace.QName

class BasicRun {

    static void main(String[] args) throws JAXBException {
        Car acura = new Car(1, "Acura MDX", 2016)

        JAXBContext jaxbContext = JAXBContext.newInstance(Car.class)
        Marshaller marshaller = jaxbContext.createMarshaller()
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true)

        JAXBElement<Car> jaxbElement = new JAXBElement<Car>(new QName(null, "car"), Car.class, acura)

        marshaller.marshal(jaxbElement, System.out)
    }
}
