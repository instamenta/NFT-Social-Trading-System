import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-owned',
  templateUrl: './owned.component.html',
  styleUrls: ['./owned.component.css']
})
export class OwnedComponent implements OnInit {

  userData: any;
  nftArray: any = [];
  constructor(private userService: UserService, public nftService: NftService) { }


  ngOnInit(): void {
    this.userService.getUserData().subscribe((result) => {


      this.userData = result
      console.log(this.userData)

      this.userData.ownedNft.forEach((element: any) => {
        this.nftService.loadNftByLink(element).subscribe(result => {
          if (result != undefined) {
            this.nftArray.push(result)
          }
        })
      });
    })
  }
}

