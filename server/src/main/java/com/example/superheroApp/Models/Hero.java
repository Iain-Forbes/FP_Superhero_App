package com.example.superheroApp.Models;

public class Hero {

    private String name;
    private String id;

    public Hero(String name) {
        this.name = name;
    }

    public Hero() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
