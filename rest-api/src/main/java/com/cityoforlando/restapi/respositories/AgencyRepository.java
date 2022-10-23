package com.cityoforlando.restapi.respositories;

import com.cityoforlando.restapi.models.Agency;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;
import java.util.List;

public interface AgencyRepository extends MongoRepository<Agency, String> {
    @Query("{ 'name' : ?0 }")
    Optional<List<Agency>> findByName(String name);
    @Query("{ 'id' : ?0 }")
    Optional<Agency> findById(String id);
}
