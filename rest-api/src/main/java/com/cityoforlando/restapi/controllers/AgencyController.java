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

    @PostMapping
    public ResponseEntity<Agency> addAgency(@RequestBody Agency agency) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(agencyService.addAgency(agency));
    }

    @PutMapping
    public ResponseEntity updateAgency(@RequestBody Agency agency) {
        agencyService.updateAgency(agency);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<List<Agency>> getAllAgency() {
        return ResponseEntity.ok(agencyService.getAllAgencies());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Agency> getAgencyByName(@PathVariable String name) {
        return ResponseEntity.ok(agencyService.getAgencyByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAgency(@PathVariable String id) {
        agencyService.deleteAgency(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
