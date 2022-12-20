import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-gift-nft',
  templateUrl: './gift-nft.component.html',
  styleUrls: ['./gift-nft.component.css']
})
export class GiftNftComponent {
  params$:any;
  userId:any;
  userData: any;
  nftArray: any = [];
  currentUserData: any;
  
  constructor(
    private userService: UserService, 
    public nftService: NftService, 
    private router: Router, 
    private route: ActivatedRoute,
    ) { }
  ngOnInit(): void {
    this.params$ = this.route.params
    .subscribe((params) => {
      this.userId = params["id"]
    })
    this.userService.getUser(this.userId)
    .subscribe((result) => {
      this.userData = result
    })
    this.userService.getUserData()
    .subscribe((currentUserData) => {
      this.currentUserData = currentUserData;
      console.log(this.currentUserData.ownedNft)
      this.currentUserData?.ownedNft.forEach((url: any) => {
        this.nftService.loadNftByLink(url)
        .subscribe(result => {
          if (result != undefined  && !this.userData.ownedNft?.includes(url)) {
            this.nftArray.push(result)
          }
        })
      })
    })
    
  }
  giftNftHandler($event: any) {
    const url = $event.target.src
    this.nftService.giftNft(this.currentUserData._id,this.userData.username, url)
    .subscribe((res) => {
      this.router.navigate(['/profile/'+this.userData._id])
    })
}
}