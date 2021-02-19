package com.example.superheroApp.Repositories;

import com.example.superheroApp.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.net.UnknownServiceException;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    @DeleteQuery
    User deleteByid(String id);

}

