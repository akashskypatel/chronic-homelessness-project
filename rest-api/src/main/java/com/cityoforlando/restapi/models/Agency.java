package com.cityoforlando.restapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "agencies")
public class Agency {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String address;
    private Geocode geocode;
    private String contactPhone;
    private String website;
    private String publicContactEmail;
    private String cityContactEmail;
    private Hours hours;
    private String[] services;
    private Date dateCreated;
    private Date dateUpdated;
    private Date dateLastEmailed;
    private boolean active;
    private Service[] servicesInfo;
}
