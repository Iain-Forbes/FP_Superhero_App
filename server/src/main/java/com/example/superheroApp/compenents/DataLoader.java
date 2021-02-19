package com.example.superheroApp.compenents;

import com.example.superheroApp.Client.API;
import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.HeroRepository;
import com.example.superheroApp.Repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.sun.org.apache.xpath.internal.res.XPATHErrorResources_pt_BR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.MalformedURLException;

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
//
//            Hero strong = new Hero("Mr Strong", "1-mr-strong", 2, 50, 32, 100, 100, 100);
//            User steve = new User("Steve", strong);
        }
}
