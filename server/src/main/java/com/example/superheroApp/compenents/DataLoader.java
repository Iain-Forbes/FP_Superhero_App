package com.example.superheroApp.compenents;

import com.example.superheroApp.Client.API;
import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.HeroRepository;
import com.example.superheroApp.Repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    API apiClient;

    @Autowired
    HeroRepository heroRepository;

    @Autowired
    UserRepository userRepository;

    public void run(ApplicationArguments args) throws Exception {
            try {
                heroRepository.saveAll(apiClient.getAllHeroes());
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

                Hero strong = new Hero("Mr Strong", "1-mr-strong", 2, 50, 32, 100, 100, 100, "https://static.wikia.nocookie.net/mrmen/images/6/60/Strong3.png/revision/latest/scale-to-width-down/340?cb=20181002021322", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" , "placeholder" , "placeholder");
                Hero weak = new Hero("Mr Weak", "2-mr-weak", 2, 50, 32, 100, 100, 100, "https://static.wikia.nocookie.net/mrmen/images/6/60/Strong3.png/revision/latest/scale-to-width-down/340?cb=20181002021322", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder", "placeholder" , "placeholder" , "placeholder");
                User steve = new User("Steve", List.of(strong, weak));

                ;
                heroRepository.save(strong);
                heroRepository.save(weak);
                userRepository.save(steve);



        }
}
