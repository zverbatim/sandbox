package org.jaxb.moxy.demo.basic

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import javax.xml.bind.annotation.XmlAttribute
import javax.xml.bind.annotation.XmlElement
import javax.xml.bind.annotation.XmlRootElement

@XmlAccessorType(XmlAccessType.NONE)
@XmlRootElement
class Car {

    @XmlAttribute
    int id

    @XmlElement
    String name

    @XmlElement
    int year

    Car() {}

    Car(int id, String name, int year) {
        this.id = id
        this.name = name
        this.year = year
    }
}