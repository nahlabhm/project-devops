package com.example.app.service.implementation;

import com.example.app.helper.UserFoundException;
import com.example.app.model.User;
import com.example.app.model.UserRole;
import com.example.app.repository.RoleRepository;
import com.example.app.repository.UserRepository;
import com.example.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

 @Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
//creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User local=this.userRepository.findByUsername(user.getUsername());
        if(local != null){
            System.out.println("User is already there ");
            throw new UserFoundException();
        }else {
            //user create
            for (UserRole usr:userRoles)
            {
                roleRepository.save(usr.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local =this.userRepository.save(user);
        }

        return local;
    }

     @Override
     public User getUser(String username) {
         return this.userRepository.findByUsername(username) ;
     }

     @Override
     public void deleteUser (Long userId){
        this.userRepository.deleteById(userId);
     }


 }
