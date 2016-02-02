package org.jaxb.moxy.demo.custom

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import javax.xml.bind.annotation.XmlElement
import javax.xml.bind.annotation.XmlRootElement

@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
class Cast {

    @XmlElement
    String role

    @XmlElement
    Actor actor

    Cast(){}

    Cast(String role, Actor actor) {
        this.role = role
        this.actor = actor
    }

    @Override
    String toString(){
        "$role" + ": ${actor.firstName}" + " ${actor.lastName}"
    }
}
