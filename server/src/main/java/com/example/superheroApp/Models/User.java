package com.example.superheroApp.Models;


import java.util.ArrayList;
import java.util.List;

public class User {

    private String id;
    private String name;
    private List<Hero> heroes;

    public User(String name, List<Hero> heroes) {
        this.name = name;
        this.heroes = heroes;
    }

    public User() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Hero> getHeroes() {
        return heroes;
    }

    public void setHeroes(List<Hero> heroes) {
        this.heroes = heroes;
    }

    public void addHero(Hero hero){
        this.heroes.add(hero);
    }
}
