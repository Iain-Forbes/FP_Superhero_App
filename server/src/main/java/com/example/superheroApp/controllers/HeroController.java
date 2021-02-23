package com.example.superheroApp.controllers;

import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Repositories.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HeroController {

    @Autowired
    HeroRepository heroRepository;

    @GetMapping(value = "/heroes")
    public ResponseEntity<List<Hero>> getAllHeroesBD(
            @RequestParam(name="name", required = false) String name,
            @RequestParam(name="slug", required = false) String slug,
            @RequestParam(name="alignment", required = false) String alignment
    ) {
        if (name != null) {
           return new ResponseEntity<> (heroRepository.findByName(name), HttpStatus.OK);
        }
        {
            if (slug != null) {
                return new ResponseEntity<>(heroRepository.findBySlug(slug), HttpStatus.OK);
            }
        }
        {
            if (alignment != null) {
                return new ResponseEntity<>(heroRepository.findByAlignment(alignment), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(heroRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping (value ="/heroes")
    public ResponseEntity<Hero> postHero(@RequestBody Hero hero) {
        heroRepository.save(hero);
        return new ResponseEntity<>(hero, HttpStatus.CREATED);
    }

    @PatchMapping(value = "heroes/{id}")
    public ResponseEntity<Hero> updateHero(@RequestBody  Hero hero) {
        heroRepository.save(hero);
        return new ResponseEntity<>(hero, HttpStatus.OK);
    }

}
