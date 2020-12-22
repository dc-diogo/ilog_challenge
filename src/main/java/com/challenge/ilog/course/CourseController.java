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

    //TODO: Change the return for some kind of response;
    @PostMapping(path="/add")
    public @ResponseBody String addNewCourse (@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    //TODO: Change the return for some kind of response;
    @DeleteMapping(path="/remove")
    public @ResponseBody String removeCourse(@RequestParam() int identifier){
        System.out.println("Chegou aqui");
        return courseService.removeCourse(identifier);
    }

    //TODO: Change the return for some kind of response;
    @PutMapping(path="/alter")
    public @ResponseBody String alterCourse(@RequestParam Course course) {
        return courseService.alterCourse(course);
    }

}
