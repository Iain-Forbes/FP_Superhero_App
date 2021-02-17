package com.example.superheroApp.Repositories;

import com.example.superheroApp.Models.Hero;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeroRepository extends MongoRepository<Hero, String> {
}
