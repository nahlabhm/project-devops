import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(public login:LoginService){}

  ngOnInit():void{}

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
