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

  userId: string = '';
  userData: any;
  nftArray: any[] = [];
  currentUserData: any;

  constructor(
    private userService: UserService,
    public nftService: NftService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.route.params
      .subscribe(params => this.userService.getUser(params["id"])
          .subscribe(res => this.userData = res ))

    this.userService.getUserData()
      .subscribe(data => {
        this.currentUserData = data;
        this.currentUserData?.ownedNft.forEach((url: any) => {
          this.nftService.loadNftByLink(url)
            .subscribe(nftData => {
              if (nftData != undefined && !this.userData.ownedNft?.includes(url)) {
                this.nftArray.push(nftData)
              }
            })
        })
      })

  }
  giftNftHandler($event: any) {
    const url = $event.target?.src;
    this.nftService.giftNft(this.currentUserData?._id, this.userData?.username, url)
      .subscribe(() => this.router.navigate(['/profile/' + this.userData?._id]))
  }
}