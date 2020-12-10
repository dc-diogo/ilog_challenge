package com.challenge.ilog.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping(path="/course")
public class CourseService {

    @Autowired
    private CourseController courseController;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Course> getAllCourses() {
        return courseController.getAllCourses();
    }

    @GetMapping(path="/findById")
    public @ResponseBody Course getAllCourses(@RequestParam() int identifier){
        return courseController.getCourseById(identifier);
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewCourse (@RequestBody Course course) {
        return courseController.addCourse(course);
    }

    @DeleteMapping(path="/delete")
    public @ResponseBody String deleteCourse(@RequestParam int identifier){
        return courseController.deleteCourse(identifier);
    }


}
