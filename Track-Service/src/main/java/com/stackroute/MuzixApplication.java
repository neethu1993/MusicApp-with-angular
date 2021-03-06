/**
 * Muzix Application main class
 */
package com.stackroute;

import com.stackroute.repository.MuzixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication //used to enable @EnableAutoConfiguration, @ComponentScan, @Configuration

public class MuzixApplication {

	public static void main(String[] args) {
		SpringApplication.run(MuzixApplication.class, args);
	}
}

