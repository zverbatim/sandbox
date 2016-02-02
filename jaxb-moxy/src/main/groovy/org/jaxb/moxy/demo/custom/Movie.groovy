package org.jaxb.moxy.demo.custom

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import javax.xml.bind.annotation.XmlAttribute
import javax.xml.bind.annotation.XmlElement
import javax.xml.bind.annotation.XmlRootElement

@XmlAccessorType(XmlAccessType.NONE)
@XmlRootElement
class Movie {

    @XmlAttribute
    int year

    @XmlElement
    String title

    @XmlElement
    List<Cast> cast

    Movie() {}

    Movie(int year, String title, List<Cast> cast) {
        this.year = year
        this.title = title
        this.cast = cast
    }

    @Override
    String toString() {
        "$title($year)\n" +
                "-" * (title.length() + 6) + "\n" +
                "${cast.each { it.toString() }}"
    }
}