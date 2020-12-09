package com.challenge.ilog.course;

import javax.persistence.*;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Integer  courseId;

    @Column(name = "name")
    private String courseName;

    @Column(name = "description")
    private String courseDescription;

    @Column(name = "duration")
    private int duration;

    @Column(name = "price")
    private Double coursePrice;

    public Course(String courseName, String courseDescription, int duration, Double coursePrice) {
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.duration = duration;
        this.coursePrice = coursePrice;
    }

    public Course() {

    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Double getCoursePrice() {
        return coursePrice;
    }

    public void setCoursePrice(Double coursePrice) {
        this.coursePrice = coursePrice;
    }
}
