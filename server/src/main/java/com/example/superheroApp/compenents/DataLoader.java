package com.example.superheroApp.compenents;

import com.example.superheroApp.Client.API;
import com.example.superheroApp.Repositories.HeroRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
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

    public void run(ApplicationArguments args) throws Exception {
            try {
                heroRepository.saveAll(apiClient.getAllHeroes());
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
}
