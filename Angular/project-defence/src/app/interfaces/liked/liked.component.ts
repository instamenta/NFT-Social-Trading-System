import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  
  userData: any;
  userId: any;
  params$: any;

  constructor(private userService: UserService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.params$ = this.route.params.subscribe(params => {
      this.userId = params["id"]
    })
    this.userService.getUser(this.userId).subscribe((result) => {
      console.log(result)
      this.userData = result
    })
  }
}
