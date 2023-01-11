import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public login:LoginService){}

  ngOnInit():void{}

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}

