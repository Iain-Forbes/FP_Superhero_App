package com.example.superheroApp.controllers;

import com.example.superheroApp.Models.Hero;
import com.example.superheroApp.Models.User;
import com.example.superheroApp.Repositories.HeroRepository;
import com.example.superheroApp.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value="/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/users/{id}")
    public ResponseEntity getUsersById(@PathVariable String id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @DeleteMapping(value="/users/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable String id){
            userRepository.deleteByid(id);
            return new ResponseEntity<>(null, HttpStatus.OK);
        }

    @PostMapping(value ="/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    }
