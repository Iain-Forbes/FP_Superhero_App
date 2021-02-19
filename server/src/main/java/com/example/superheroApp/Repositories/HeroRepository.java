package com.example.superheroApp.Repositories;

import com.example.superheroApp.Models.Hero;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HeroRepository extends MongoRepository<Hero, String> {

    List<Hero> findByName(String name);
    List<Hero> findBySlug(String slug);

}
