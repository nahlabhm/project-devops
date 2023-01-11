import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }
//generate token 
public generateToken(loginData:any){
  return this.http.post(`${baseUrl}/generate-token`,loginData);
}

//login user : set token in localsorage 
public loginUser(token:any){
  localStorage.setItem('token',token);
}


public isLoggedIn(){
  let TokenStr=localStorage.getItem('token');
  if(TokenStr==undefined||TokenStr==''|| TokenStr==null){
    return false;
  }else{
    return true;
  }
}

public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return true;
}
public getToken(){
  return localStorage.getItem('token');
}

public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}

 
}
