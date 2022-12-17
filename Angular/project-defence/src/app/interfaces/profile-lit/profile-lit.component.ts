import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-profile-lit',
  templateUrl: './profile-lit.component.html',
  styleUrls: ['./profile-lit.component.css']
})
export class ProfileLitComponent implements OnInit{
  userList: any;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().
    subscribe((data) => {
      this.userList = data
    })
  }
}
