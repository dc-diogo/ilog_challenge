package com.challenge.ilog.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

@Controller
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping(path="all")
    public @ResponseBody Iterable<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping(path="course")
    public @ResponseBody Course getAllCourses(@RequestParam() int identifier){
        Optional<Course> courseById = courseRepository.findById(identifier);
        return courseById.orElse(null);
    }


}
