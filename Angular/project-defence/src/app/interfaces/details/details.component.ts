import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  nftData: any | null = null
  nftId: any;
  params$: any;
  creatorData: any;
  constructor( private route: ActivatedRoute, private nftService: NftService, private userService: UserService) {}
  
  ngOnInit() {  

    this.params$ = this.route.params.subscribe(params => {
      this.nftId = params["id"]
    })
    console.log(this.nftId)

    this.nftData = this.nftService.loadNft(this.nftId).subscribe({
      next: (nftData) => {
        this.nftData = nftData
        console.log(nftData)
        this.userService.getUser(nftData.creator).subscribe(result => {
          this.creatorData = result
          console.log(this.creatorData)
        })

      }
    })

  }
}
