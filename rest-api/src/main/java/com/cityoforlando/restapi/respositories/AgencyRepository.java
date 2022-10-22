package com.cityoforlando.restapi.respositories;

import com.cityoforlando.restapi.models.Agency;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface AgencyRepository extends MongoRepository<Agency, String> {
    @Query("{ 'name' : ?0 }")
    Optional<Agency> findByName(String name);
}
