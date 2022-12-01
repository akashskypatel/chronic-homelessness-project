package com.cityoforlando.restapi.services;


import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class MailService {

    public static void sendMail(String from, String to, String password,String subject, String message){
        String host = "smtp.gmail.com";
        Properties properties = System.getProperties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            Transport transport = session.getTransport();
            MimeMessage mimeMessage = new MimeMessage(session);
            mimeMessage.setFrom(new InternetAddress(from));
            mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            mimeMessage.setSubject(subject);
            mimeMessage.setText(message);
            transport.connect();
            Transport.send(mimeMessage);
            transport.close();
            System.out.println("Sent Mail");
        } catch (MessagingException e) {
            e.printStackTrace();
        }

    }

}
