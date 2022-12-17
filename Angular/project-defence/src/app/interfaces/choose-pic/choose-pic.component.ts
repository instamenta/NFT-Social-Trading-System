import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-choose-pic',
  templateUrl: './choose-pic.component.html',
  styleUrls: ['./choose-pic.component.css']
})
export class ChoosePicComponent {
  params$:any;
  userId:any;
  userData: any;
  nftArray: any = [];
  
  constructor(
    private userService: UserService, 
    public nftService: NftService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.params$ = this.route.params
    .subscribe((params) => {
      this.userId = params["id"]
    })
    
    this.userService.getUser(this.userId)
    .subscribe((result) => {
      this.userData = result
      this.userData.ownedNft.forEach((url: any) => {
        this.nftService.loadNftByLink(url)
        .subscribe(result => {
          if (result != undefined) {
            this.nftArray.push(result)
          }
        })
      })
    })
  }
  changePicHandler($event: any) {
    const url = $event.target.src
    this.userService.changeProfilePicture(this.userData._id, url)
    .subscribe((res) => {
      this.router.navigate(['/profile/'+this.userData._id])
    })
  }
}