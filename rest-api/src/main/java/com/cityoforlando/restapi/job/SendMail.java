package com.cityoforlando.restapi.job;

import com.cityoforlando.restapi.models.Mail;
import com.cityoforlando.restapi.services.MailService;
import org.knowm.sundial.Job;
import org.knowm.sundial.SundialJobScheduler;
import org.knowm.sundial.annotations.SimpleTrigger;
import org.knowm.sundial.exceptions.JobInterruptException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@SimpleTrigger(repeatInterval = 60, timeUnit = TimeUnit.MINUTES)
public class SendMail extends Job {
    private static List<Mail> mails = new ArrayList<>();
    @Override
    public void doRun() throws JobInterruptException {
        for (Mail mail:mails){
            MailService.sendMail(mail.getFrom(), mail.getTo(), mail.getPassword(), mail.getSubject(), mail.getMessage());
        }
    }

    public static void addMail(Mail mail){
        mails.add(mail);
    }

}
