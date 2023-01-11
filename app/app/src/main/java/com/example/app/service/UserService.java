package com.example.app.service;

import com.example.app.model.User;
import com.example.app.model.UserRole;

import java.util.Set;

public interface UserService {
    //creating User
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
    //get user by username
    public User getUser(String username);

    void deleteUser(Long userId);
}
