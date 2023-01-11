import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:'',
  }
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}
  
  ngOnInit():void{}

  formSubmit(){
    console.log('login btn clicked');

    if(
      this.loginData.username.trim()==''||
      this.loginData.username==null
    ){
      this.snack.open('username is required ','ok',{
duration:3000,
      });
      return;
    }
    if(
      this.loginData.password.trim()==''||
      this.loginData.password==null
    ){
      this.snack.open('password is required ','ok',{
duration:3000,
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //login 
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user:any)=>{

          this.login.setUser(user);
          console.log(user);

          if(this.login.getUserRole()=='Admin'){
            this.router.navigate(['admin']);

          }else if(this.login.getUserRole()=='Normal'){

            this.router.navigate(['user']);
          }else{
            this.login.logout();
          }
        });


      },
      (error)=>{
        console.log('error');
        console.log(error);
      }
    );
  }
}

