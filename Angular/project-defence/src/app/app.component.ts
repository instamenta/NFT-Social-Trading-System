import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // implements OnInit
  title = 'project-defence';
  userData: any;
  isUser: any = false;

  constructor(private userService: UserService) {
    this.userData = this.userService.getUserData().subscribe((result) => {

        this.userData = result
        if(this.userData.message) {
          this.isUser = false

        } else {
          this.isUser = true
        }
      })
  }
  
  // ngOnInit(): void {

    // this.userData = this.userService.getUserData().subscribe((result) => {


    //   this.userData = result
    //   if(this.userData.message) {
    //     this.isUser = false
    //   } else {
    //     this.isUser = true
    //   }
    //   console.log(this.userData)
    // })
  // }
}
