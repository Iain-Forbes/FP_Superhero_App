package com.example.superheroApp;

import com.example.superheroApp.Client.API;
import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.net.MalformedURLException;

@SpringBootTest
class SuperheroAppApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Autowired
	API apiClient;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateSaveUserToDB(){
		User user = new User("Iain");
		userRepository.save(user);
	}

	@Test
	public void canClient(){
		try {
			apiClient.getAllHeroes();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
	}

}
