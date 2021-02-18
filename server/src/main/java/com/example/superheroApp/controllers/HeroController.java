package com.example.superheroApp.controllers;

import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Repositories.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HeroController {

    @Autowired
    HeroRepository heroRepository;

    @GetMapping(value = "/heroes")
    public ResponseEntity<List<Hero>> getAllHeroesBD(){
        return new ResponseEntity<>(heroRepository.findAll(), HttpStatus.OK);
    }

}
