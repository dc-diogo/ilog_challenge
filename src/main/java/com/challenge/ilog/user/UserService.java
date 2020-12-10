package com.challenge.ilog.user;

import com.challenge.ilog.course.Course;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class UserService {

        private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public Iterable<User> getAllUsers(){
            return userRepository.findAll();
        }

        public User getUserById(int identifier){
            Optional<User> userById = userRepository.findById(identifier);
            return userById.orElse(null);
        }

        public String addUser(User user){
            createNewUser(user);
            return null;
        }

        public String deleteUser(int userId){
            Optional<User> userToDelete = userRepository.findById(userId);
            userRepository.delete(userToDelete.get());
            return "Deleted";
        }

        private User createNewUser(User user){
            User userToAdd = new User();
            return userRepository.save(userToAdd);
        }


    }


