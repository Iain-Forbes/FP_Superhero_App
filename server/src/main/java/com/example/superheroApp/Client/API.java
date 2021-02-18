package com.example.superheroApp.Client;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

@Component
public class API {

    public void getAllHeroes() throws JsonProcessingException, MalformedURLException {

        URL url = new URL("https://akabab.github.io/superhero-api/api/all.json");

        RestTemplate restTemplate = new RestTemplate();

//        ResponseEntity<JsonNode> jsonResponse = restTemplate.getForObject(url, JsonNode.class);

        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(Arrays.asList(MediaType.TEXT_PLAIN, MediaType.APPLICATION_JSON));
        restTemplate.getMessageConverters().add(0, converter);
//

//        String heroesFromAPINode = restTemplate.getForObject(url, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = null;
        try {
            rootNode = mapper.readTree(url);
        } catch (IOException e) {
            e.printStackTrace();
        }
                    System.out.println(rootNode.toPrettyString());
                }

    }



