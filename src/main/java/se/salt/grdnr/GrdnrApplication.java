package se.salt.grdnr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories
public class GrdnrApplication {

	public static void main(String[] args) {
		SpringApplication.run(GrdnrApplication.class, args);
	}

}
