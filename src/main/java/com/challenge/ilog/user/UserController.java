package com.challenge.ilog.user;

import com.challenge.ilog.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }

//    @GetMapping(path="/findById")
//    public @ResponseBody User getAllCourses(@RequestParam() int identifier){
//    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @DeleteMapping(path="/delete")
    public @ResponseBody String deleteUser(@RequestParam int identifier){
        return userService.deleteUser(identifier);
    }

}
