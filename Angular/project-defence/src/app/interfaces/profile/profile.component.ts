import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  currentUserData: any;
  isOwner: any = false;
  nftId: any;
  params$: any;

  constructor(private userService: UserService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.params$ = this.route.params.subscribe(params => {
      this.nftId = params["id"]
    })
    this.userService.getUser(this.nftId).subscribe((result) => {
      this.userData = result
      console.log(this.userData)

      this.userService.getUserData().subscribe((result) => {
        this.currentUserData = result
        if (this.currentUserData.message) {
  
        } else {
          if(this.userData.username == this.currentUserData.username) {
            this.isOwner = true
            console.log(this.currentUserData.username == this.userData.username)
          }
        }
      })
    })
  }
}
