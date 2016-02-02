package org.jaxb.moxy.demo.custom

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import javax.xml.bind.annotation.XmlAttribute
import javax.xml.bind.annotation.XmlElement
import javax.xml.bind.annotation.XmlRootElement


@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
class Actor {

    @XmlAttribute
    int id

    @XmlElement
    String firstName

    @XmlElement
    String lastName

    Actor() {}

    Actor(int id, String firstName, String lastName) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }
}
