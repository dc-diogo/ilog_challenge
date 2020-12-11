package com.challenge.ilog.usercourse;

import java.awt.*;

public class UserCourse {

    private int userId;
    private List courseId = new List();

    public UserCourse(int userId, List courseId) {
        this.userId = userId;
        this.courseId = courseId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List getCourseId() {
        return courseId;
    }

    public void setCourseId(List courseId) {
        this.courseId = courseId;
    }
}
