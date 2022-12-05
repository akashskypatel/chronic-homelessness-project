package com.cityoforlando.restapi.models;

public class Mail {
    private String from;
    private String to;
    private String password;
    private String subject;
    private String message;

    public Mail(String from, String to, String password, String subject, String message) {
        this.from = from;
        this.to = to;
        this.password = password;
        this.subject = subject;
        this.message = message;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
