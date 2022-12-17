import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  params$: any;

  nftData: any | null = null
  nftId: any;
  creatorData: any;
  currentUser: any;
  
  isCreator: any = false;
  isLiked:any = false; 
  isOwned: any = false;
  
  ownedText: any = 'own'
  likedText: any = 'like'

  constructor( 
    private route: ActivatedRoute, 
    private nftService: NftService, 
    private userService: UserService ,
    private router: Router
    ) {}
  
  ngOnInit() {  

    this.params$ = this.route.params
    .subscribe(params => {
      this.nftId = params["id"]
    })
    this.userService.getUserData()
    .subscribe((result) => {
      this.currentUser = result
      console.log(this.currentUser)
    })

    this.nftData = this.nftService.loadNft(this.nftId)
    .subscribe({
      next: (nftData) => {
        this.nftData = nftData
        this.userService.getUser(nftData.creator)
        .subscribe(result => {
          this.creatorData = result
          
          if(this.currentUser._id == this.creatorData._id) {
            this.isCreator = true
          } else {
            if(this.nftData.likes.includes(this.currentUser.username)) {
              this.isLiked = true
              this.likedText = 'liked'
            }
            if(this.nftData.owners.includes(this.currentUser.username)) {
              this.isOwned = true
              this.ownedText = 'owned'
            }
          }
        })
      }
    })
  }

  deleteHandler() {
    this.nftService.deleteNft(this.nftData._id)
    .subscribe((result) => {
      this.router.navigate(['/catalog'])
    })
  }

  likeHandler() {
    this.nftService.likeNft(this.nftId, this.currentUser.username)
    .subscribe((result) => {
      if(this.likedText == "like") {
        this.likedText = "liked"
      } else {
        this.likedText = "like"
      }
    })
  }
  ownHandler() {
    this.nftService.ownNft( this.nftId, this.currentUser.username, this.nftData.pic)
    .subscribe((result) => {
      if(this.ownedText == "own") {
        this.ownedText = "owned"
      } else {
        this.ownedText = "own"
      }
    })
  }
}
