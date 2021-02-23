package com.example.superheroApp.Models;



import java.util.List;

public class User {

    private String id;
    private String userName;
    private String email;
    private List<Hero> heroes;

    public User(String userName, String email, List<Hero> heroes) {
        this.userName = userName;
        this.email = email;
        this.heroes = heroes;
    }

    public User() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
