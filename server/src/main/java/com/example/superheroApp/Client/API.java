package com.example.superheroApp.Client;

import com.example.superheroApp.Models.Hero;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URL;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component

public class API {

    public static Hero nodeToHero(JsonNode node) {


            String name = node.findPath("name").asText();
            System.out.println(node.findPath("name").asText());
            String slug = node.findPath("slug").asText();

            JsonNode powerNode = node.findPath("powerstats");
            System.out.println(node.findPath("powerstats"));

            int intelligence = powerNode.findValue("intelligence").asInt();
            int strength = powerNode.path("strength").asInt();
            int speed = powerNode.path("speed").asInt();
            int durability = powerNode.path("durability").asInt();
            int power = powerNode.path("power").asInt();
            int combat = powerNode.path("combat").asInt();

            return new Hero(name, slug, intelligence, strength, speed, durability, power, combat);

    }





    public List<Hero> getAllHeroes() throws IOException {

        //API URL Source
        URL url = new URL("https://akabab.github.io/superhero-api/api/all.json");

        //Setup new Rest Template
        RestTemplate restTemplate = new RestTemplate();

        //Handle the lack of Headers on Source Data
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(Arrays.asList(MediaType.TEXT_PLAIN, MediaType.APPLICATION_JSON));
        restTemplate.getMessageConverters().add(0, converter);

        //Start Object Mapper
        ObjectMapper mapper = new ObjectMapper();

        //Set up root, mapper reads source URL
        JsonNode root = mapper.readTree(url);
        List<Hero> heroes = Stream.of(root)
                .limit(10)
                .map(API::nodeToHero)
                .collect(Collectors.toList());

        return heroes;

    }

}





