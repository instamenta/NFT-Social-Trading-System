import { Component } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'project-defence';
  userData: any;
  isUser: any = false;

  constructor(private userService: UserService) {

    this.userService.getUserData()
    .subscribe((data) => {
        this.userData = data
        
        if(this.userData.message) {
          this.isUser = false
        } else {
          this.isUser = true
        }
      })
  }
}
