package com.cityoforlando.restapi.models;

import lombok.Data;

@Data
public class Service {
    private boolean enabled;
    private String service;
    private String serviceId;
    private boolean differentHours;
    private Hours hours;
    private String description;
}
