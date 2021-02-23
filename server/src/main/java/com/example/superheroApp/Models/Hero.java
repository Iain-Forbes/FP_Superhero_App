package com.example.superheroApp.Models;

import java.util.List;

public class Hero {

    private String id;
    private String name;
    private String slug;
    private int intelligence;
    private int strength;
    private int speed;
    private int durability;
    private int power;
    private int combat;
    private String heroImg;
    private String fullName;
    private String AlterEgo;
    private String gender;
    private String race;
    private String placeOfBirth;
    private String firstAppearance;
    private String alignment;
    private String occupation;
    private String groupAffiliation;

    public Hero(String name, String slug, int intelligence, int strength, int speed, int durability, int power, int combat, String heroImg, String fullName, String alterEgo, String gender, String race, String placeOfBirth, String firstAppearance, String alignment, String occupation, String groupAffiliation) {
        this.name = name;
        this.slug = slug;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
        this.heroImg = heroImg;
        this.fullName = fullName;
        this.AlterEgo = alterEgo;
        this.gender = gender;
        this.race = race;
        this.placeOfBirth = placeOfBirth;
        this.firstAppearance = firstAppearance;
        this.alignment = alignment;
        this.occupation = occupation;
        this.groupAffiliation = groupAffiliation;
    }

    public Hero() {
    }

    public String getHeroImg() {
        return heroImg;
    }

    public void setHeroImg(String heroImg) {
        this.heroImg = heroImg;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getDurability() {
        return durability;
    }

    public void setDurability(int durability) {
        this.durability = durability;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getCombat() {
        return combat;
    }

    public void setCombat(int combat) {
        this.combat = combat;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
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

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAlterEgo() {
        return AlterEgo;
    }

    public void setAlterEgo(String alterEgo) {
        AlterEgo = alterEgo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public String getFirstAppearance() {
        return firstAppearance;
    }

    public void setFirstAppearance(String firstAppearance) {
        this.firstAppearance = firstAppearance;
    }

    public String getAlignment() {
        return alignment;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getGroupAffiliation() {
        return groupAffiliation;
    }

    public void setGroupAffiliation(String groupAffiliation) {
        this.groupAffiliation = groupAffiliation;
    }
}
