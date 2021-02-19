package com.example.superheroApp.controllers;

import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Repositories.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(value = "/heroes/name/{name}")
    public ResponseEntity<List<Hero>> getHeroByName(@PathVariable String name){
        return (new ResponseEntity<>(heroRepository.findByName(name), HttpStatus.OK));
    }

    @GetMapping(value = "/heroes/slug/{slug}")
    public ResponseEntity<List<Hero>> getHeroBySlug(@PathVariable String slug){
        return (new ResponseEntity<>(heroRepository.findByName(slug), HttpStatus.OK));
    }

}
