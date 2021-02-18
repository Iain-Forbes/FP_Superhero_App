package com.example.superheroApp.compenents;

import com.example.superheroApp.Client.API;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;


public class DataLoader implements ApplicationRunner {

    @Autowired
    API apiClient;

    public void run(ApplicationArguments args) throws Exception {

       apiClient.getAllHeroes();
    }
}
