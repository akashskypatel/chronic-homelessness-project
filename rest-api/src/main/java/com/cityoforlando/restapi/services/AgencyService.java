package com.cityoforlando.restapi.services;

import com.cityoforlando.restapi.models.Agency;
import com.cityoforlando.restapi.respositories.AgencyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgencyService {
    private final AgencyRepository agencyRepository;

    public AgencyService(AgencyRepository agencyRepository) {
        this.agencyRepository = agencyRepository;
    }

    public Agency addAgency(Agency agency) {
       return agencyRepository.insert(agency);
    }

    public void updateAgency(Agency agency) {
        agencyRepository.findById(agency.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Agency by id: %s", agency.getId())));

        agencyRepository.save(agency);
    }

    public List<Agency> getAllAgencies() {
        return agencyRepository.findAll();
    }

    public List<Agency> getAgencyByName(String name) {
        return agencyRepository.findByName(name).orElseThrow(
                () -> new RuntimeException(String.format("Cannot find Agency by name: %s", name)));
    }

    public Agency getAgencyById(String id) {
        return agencyRepository.findById(id).orElseThrow(
                () -> new RuntimeException(String.format("Cannot find Agency by id: %s", id)));
    }

    public void deleteAgency(String id) {
        agencyRepository.deleteById(id);
    }

}
