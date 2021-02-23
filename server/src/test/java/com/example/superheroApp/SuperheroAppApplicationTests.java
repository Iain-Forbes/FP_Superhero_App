package com.example.superheroApp;

import com.example.superheroApp.Client.API;
import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.HeroRepository;
import com.example.superheroApp.Repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.Arrays;
import java.util.List;

import java.io.IOException;
import java.net.MalformedURLException;

@SpringBootTest
class SuperheroAppApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Autowired
	HeroRepository heroRepository;

	@Autowired
	API apiClient;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateSaveUserToDB(){
		Hero hero = new Hero("Mr Strong", "1-mr-strong", 2, 50, 32, 100, 100, 100, "https://static.wikia.nocookie.net/mrmen/images/6/60/Strong3.png/revision/latest/scale-to-width-down/340?cb=20181002021322", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" , "placeholder" , "placeholder");
		User user = new User("Iain", "iffy@ifTech.rom", List.of(hero));
		userRepository.save(user);
	}

	@Test
	public void CanAddaListAndSaveToBD(){
		Hero strong = new Hero("Mr Strong", "1-mr-strong", 2, 50, 32, 100, 100, 100, "https://static.wikia.nocookie.net/mrmen/images/6/60/Strong3.png/revision/latest/scale-to-width-down/340?cb=20181002021322", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" , "placeholder" , "placeholder");
		Hero weak = new Hero("Mr Weak", "2-mr-weak", 2, 50, 32, 100, 100, 100, "https://static.wikia.nocookie.net/mrmen/images/6/60/Strong3.png/revision/latest/scale-to-width-down/340?cb=20181002021322", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" , "placeholder" , "placeholder");
		User steve = new User("Steve", "Stu@Cue.hue", List.of(strong, weak));

		heroRepository.saveAll(List.of(strong, weak));
		userRepository.save(steve);
	}

	@Test
	public void canClient(){
		try {
			apiClient.getAllHeroes();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
