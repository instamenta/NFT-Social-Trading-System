import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit{

  userData: any | null = null  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUser().subscribe({
      next: (userData) => {
        this.userData = userData
        console.log(userData)
      }
    })
  }
}
