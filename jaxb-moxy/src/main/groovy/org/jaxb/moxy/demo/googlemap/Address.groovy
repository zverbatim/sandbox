package org.jaxb.moxy.demo.googlemap

import javax.xml.bind.annotation.XmlAccessType
import javax.xml.bind.annotation.XmlAccessorType
import org.eclipse.persistence.oxm.annotations.XmlPath;


@XmlAccessorType(XmlAccessType.NONE)
public class Address {

    @XmlPath("Placemark/ns:AddressDetails/ns:Country/ns:AdministrativeArea/ns:Locality/ns:Thoroughfare/ns:ThoroughfareName/text()")
    private String street;

    @XmlPath("Placemark/ns:AddressDetails/ns:Country/ns:AdministrativeArea/ns:Locality/ns:LocalityName/text()")
    private String city;

    @XmlPath("Placemark/ns:AddressDetails/ns:Country/ns:AdministrativeArea/ns:AdministrativeAreaName/text()")
    private String state;

    @XmlPath("Placemark/ns:AddressDetails/ns:Country/ns:CountryNameCode/text()")
    private String country;

    @XmlPath("Placemark/ns:AddressDetails/ns:Country/ns:AdministrativeArea/ns:Locality/ns:PostalCode/ns:PostalCodeNumber/text()")
    private String postalCode;

}
