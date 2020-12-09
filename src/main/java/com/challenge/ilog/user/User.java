package com.challenge.ilog.user;

import javax.persistence.*;
import java.awt.*;
import java.util.Date;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address_id")
    private Integer address;
    @Column(name = "admission_date")
    private Date admissionDate;


    public User(Integer id, String phone, Integer address, Date admissionDate) {
        this.id = id;
        this.phone = phone;
        this.address = address;
        this.admissionDate = admissionDate;
    }

    public User() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getAddress() {
        return address;
    }

    public void setAddress(Integer address) {
        this.address = address;
    }

    public Date getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(Date admissionDate) {
        this.admissionDate = admissionDate;
    }
}
