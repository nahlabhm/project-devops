import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  constructor(private userService:UserService,private snack:MatSnackBar){}

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  };
  ngOnInit(): void {
    
  }
  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('user is required' ,'Ok',{
        duration:3000,
     });
      return;
    }
    //add user : user service 
  this.userService.adduser(this.user).subscribe(
    (data)=>{
      //success
      console.log(data);
      Swal.fire('Success','User is Registdred','success');
    },
    (error)=>{
      //error

      console.log(error);
      this.snack.open('somthing went wrong','error',{
        duration:3000,
      });
    }
    );
   }

}
