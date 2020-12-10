package com.challenge.ilog.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping(path="/course")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping(path="/findById")
    public @ResponseBody Course getAllCourses(@RequestParam() int identifier){
        return courseService.getCourseById(identifier);
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewCourse (@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @DeleteMapping(path="/delete")
    public @ResponseBody String deleteCourse(@RequestParam int identifier){
        return courseService.deleteCourse(identifier);
    }


}
