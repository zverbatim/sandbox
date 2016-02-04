# JAXB using Eclispe MOXy  implementation

## Docs and credits
- [Very good quick start docs](https://wiki.eclipse.org/EclipseLink/Examples/MOXy/GettingStarted)
- [Gradle groovy plugin docs](https://docs.gradle.org/current/userguide/groovy_plugin.html)


## About
Demo how class can be marshalled to and XML and vice versa using annotation

## Notes
- For groovy classes use `@XmlAccessorType(XmlAccessType.NONE)`, [stackoverflow](http://stackoverflow.com/questions/1161147/how-do-i-get-groovy-and-jaxb-to-play-nice-together)
- For annotation to work need to have under the package the `jaxb.properties` filewith the specification `javax.xml.bind.context.factory=org.eclipse.persistence.jaxb.JAXBContextFactory`
