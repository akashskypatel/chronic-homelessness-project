package com.cityoforlando.restapi.controllers;

import com.cityoforlando.restapi.models.Agency;
import com.cityoforlando.restapi.services.AgencyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/agency")
public class AgencyController {
    private final AgencyService agencyService;

    public AgencyController(AgencyService agencyService) {
        this.agencyService = agencyService;
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Agency> addAgency(@RequestBody Agency agency) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(agencyService.addAgency(agency));
    }

    @CrossOrigin
    @PutMapping
    public ResponseEntity updateAgency(@RequestBody Agency agency) {
        agencyService.updateAgency(agency);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Agency>> getAllAgency() {
        return ResponseEntity.ok(agencyService.getAllAgencies());
    }

    @CrossOrigin
    @GetMapping("/name/{name}")
    public ResponseEntity<List<Agency>> getAgencyByName(@PathVariable String name) {
        return ResponseEntity.ok(agencyService.getAgencyByName(name));
    }
    @CrossOrigin
    @GetMapping("/id/{id}")
    public ResponseEntity<Agency> getAgencyById(@PathVariable String id) {
        return ResponseEntity.ok(agencyService.getAgencyById(id));
    }

    @CrossOrigin
    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteAgency(@PathVariable String id) {
        agencyService.deleteAgency(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
