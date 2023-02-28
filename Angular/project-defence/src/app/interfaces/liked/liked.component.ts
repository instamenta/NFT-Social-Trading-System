import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  userData: any;
  nftArray: any = [];

  constructor(
    private userService: UserService,
    public nftService: NftService
  ) { }
  ngOnInit(): void {
    this.userService.getUserData()
      .subscribe((data: any) => {
        data?.likedNft?.forEach((el: any) => {
          this.nftService.loadNft(el)
            .subscribe(res => {
              if (res != undefined) {
                this.nftArray.push(res)
              }
            })
        })
      })
  }
}


