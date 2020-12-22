package com.challenge.ilog.course;

import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
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

    public String removeCourse(int identifier){
        Optional<Course> courseToDelete = courseRepository.findById(identifier);
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
        //TODO: Handle possible exception that _save_ throws;
        return courseRepository.save(courseToAdd);
    }

    public String alterCourse(Course course){
        Optional<Course> courseToAlter = courseRepository.findById(course.getCourseId());
        if (courseToAlter.isPresent()){
            courseRepository.deleteById(course.getCourseId());
            courseRepository.save(course);
            return "Sucessufully updated course.";
        } else {
            return "Oh-oh! Trouble updating course...";
        }
    }


}
