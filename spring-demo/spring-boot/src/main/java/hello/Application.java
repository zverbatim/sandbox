package hello;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.stream.Stream;

@EnableAutoConfiguration
@RestController
public class Application {


    @RequestMapping("/")
    String home() {
        return "Working ...\n";
    }


    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }


    /**
     * Outputs all the beans used
     * @param ctx spring application context
     * @return a sorted list of all the beans that the app has configured and spring brings to the table
     */
    @Bean
    CommandLineRunner beans(ApplicationContext ctx) {

        return (String... argx) -> {
            System.out.println("Beans loaded:");
            String[] beanNames = ctx.getBeanDefinitionNames();

            Arrays.sort(beanNames);
            Arrays.stream(beanNames)
                    .forEach(System.out::println);
        };
    }
}