package com.challenge.ilog.course;

import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Iterable<Course> getAllCourses(){
        return courseRepository.findAll();
    }

    public Course getCourseById(int identifier){
        Optional<Course> courseById = courseRepository.findById(identifier);
        return courseById.orElse(null);
    }

    public String addCourse(Course course){
        createNewCourse(course);
        return null;
    }

    public String deleteCourse(int courseId){
        Optional<Course> courseToDelete = courseRepository.findById(courseId);
        courseRepository.delete(courseToDelete.get());
        return "Deleted";
    }

    private Course createNewCourse(Course course){
        Course courseToAdd = new Course(
                course.getCourseName(),
                course.getCourseDescription(),
                course.getDuration(),
                course.getCoursePrice()
        );
        return courseRepository.save(courseToAdd);
    }


}
