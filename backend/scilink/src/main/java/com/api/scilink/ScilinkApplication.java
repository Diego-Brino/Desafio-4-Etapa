package com.api.scilink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ScilinkApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScilinkApplication.class, args);
	}

	@GetMapping("/")
	public ResponseEntity<String> helloWorld () {
		return ResponseEntity.ok("Olá");
	}

}
