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
  userId: string = '';
  userData: any;
  nftArray: any = [];
  
  constructor(
    private userService: UserService, 
    public nftService: NftService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.route.params
    .subscribe(params => this.userId = params["id"])
    
    this.userService.getUser(this.userId)
    .subscribe(data => {
      this.userData = data
      this.userData.ownedNft.forEach((url: any) => {
        this.nftService.loadNftByLink(url)
        .subscribe(nftData => {
          if (nftData != undefined) {
            this.nftArray.push(nftData)
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