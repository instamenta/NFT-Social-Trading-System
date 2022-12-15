import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as e from 'cors';

import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-choose-pic',
  templateUrl: './choose-pic.component.html',
  styleUrls: ['./choose-pic.component.css']
})
export class ChoosePicComponent {
  userData: any;
  nftArray: any = [];
  constructor(private userService: UserService, public nftService: NftService, private router: Router) { }


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

  changePicHandler($event: any) {
    console.log($event.target.src)
    let url = $event.target.src
    this.userService.changeProfilePicture(this.userData._id, url).subscribe(result => {
      console.log(result);
      this.router.navigate(['/profile/'+this.userData._id])
    })
  }

}
