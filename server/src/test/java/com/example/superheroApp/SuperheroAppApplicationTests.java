package com.example.superheroApp;

import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SuperheroAppApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateSaveUserToDB(){
		User user = new User("Iain");
		userRepository.save(user);
	}

}
