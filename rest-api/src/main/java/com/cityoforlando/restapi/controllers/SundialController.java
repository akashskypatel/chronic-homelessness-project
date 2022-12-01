package com.cityoforlando.restapi.controllers;

import com.cityoforlando.restapi.job.SendMail;
import com.cityoforlando.restapi.models.Mail;
import com.cityoforlando.restapi.services.MailService;
import org.knowm.sundial.SundialJobScheduler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/mail")
public class SundialController {

    public SundialController(){
        SundialJobScheduler.startScheduler("com.cityoforlando.restapi.job");
    }

    @GetMapping("send/{id}/{from}/{to}/{password}/{subject}/{message}")
    public ResponseEntity sendMail(@PathVariable String from,@PathVariable String to,
                                   @PathVariable String password,@PathVariable String subject,
                                   @PathVariable String message){
        Mail mail = new Mail(from, to, password, subject, message);
        SendMail.addMail(mail);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
