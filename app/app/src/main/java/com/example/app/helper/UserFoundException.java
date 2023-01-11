package com.example.app.helper;

public class UserFoundException extends Exception{
    public  UserFoundException(){
        super("User with this username is already there in DB");
    }
    public UserFoundException(String msg){
        super(msg);
    }
}
