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

  isOwner: Boolean = false;
  isGuest: Boolean = true;
  
  userId: String = '';
  params$: any;

  usernameValue: String = '';
  descriptionValue: String = '';

  constructor( private userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.params$ = this.route.params?.subscribe(params => {
      this.userId = params["id"]
    })
    this.userService.getUser(this.userId).subscribe(data => {

      if(data.hasOwnProperty('_id') == false) return;
      this.userData = data
      this.usernameValue = this.userData.username
      this.descriptionValue = this.userData.bio

      this.userService.getUserData().subscribe((res) => {
        if(res.hasOwnProperty('_id') == false) return;
        this.isGuest = false
        this.currentUserData = res

        if ( !this.currentUserData?.message
          && this.userData?.username == this.currentUserData?.username
          ) { this.isOwner = true } 
      })
    })
  }
  
  editNameHandler() {
    this.userService.editUser
    (this.userId, this.usernameValue, this.userData.email)
  }
  editBioHandler() {
    this.userService.editUserDescription
    (this.userId,this.descriptionValue)
  }
  
}
