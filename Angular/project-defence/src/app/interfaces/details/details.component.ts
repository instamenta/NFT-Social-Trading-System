import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';
import { UserModel } from 'src/assets/types';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  nftData: any | null = null
  nftId: string = '';
  creatorData: any;
  currentUser: any;

  isGuest: boolean = true;
  isCreator: boolean = false;
  isLiked: boolean = false;
  isOwned: boolean = false;
  ownedText: 'own' | 'owned' = 'own'
  likedText: 'like' | 'liked' = 'like'
  comment: string = '';
  commentList: any = false;

  

  constructor(
    private route: ActivatedRoute,
    private nftService: NftService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) : void => this.nftId = params["id"]);
    this.userService.getUserData()
      .subscribe((data) : void  => {
        if ('message' in data) {
          this.isGuest = true;
        } else {
          this.isGuest = false
          this.currentUser = data
        }
      })

    this.nftData = this.nftService.loadNft(this.nftId)
      .subscribe((nftData) => {
        this.nftData = nftData
        this.commentList = nftData.comments
        this.userService.getUser(nftData.creator)
          .subscribe(data => {
            this.creatorData = data

            if (this.currentUser?._id == this.creatorData?._id) {
              this.isCreator = true
            } else {
              if (this.nftData.likes.includes(this.currentUser.username)) {
                this.isLiked = true
                this.likedText = 'liked'
              }
              if (this.nftData.owners.includes(this.currentUser.username)) {
                this.isOwned = true
                this.ownedText = 'owned'
              }
            }
          })
      }
      )
  }

  deleteHandler() {
    this.nftService.deleteNft(this.nftData._id)
      .subscribe(() => this.router.navigate(['/catalog']))
  }

  likeHandler() {
    this.nftService.likeNft(this.nftId, this.currentUser.username)
      .subscribe(data => {
        this.nftData = data;
        if (this.likedText === "like") {
          this.likedText = "liked";
        } else {
          this.likedText = "like";
        }
      })
  }
  ownHandler() {
    this.nftService.ownNft(this.nftId, this.currentUser.username, this.nftData.pic)
      .subscribe(data => {
        this.nftData = data
        if (this.ownedText === "own") {
          this.ownedText = "owned"
        } else {
          this.ownedText = "own"
        }
      })
  }
  commentHandler() {
    if (this.comment && this.comment?.length > 0) {
      this.nftService.commentNft(this.comment, this.currentUser.username, this.nftId, this.currentUser.pic)
        .subscribe((res) => {
          this.nftData = res;
          this.commentList = this.nftData?.comments;
          this.comment = '';
        });
    }
  }
  commentRelocationHandler(event: any) {
    this.userService.getUserName(event.target?.id)
      .subscribe((res : any) => '_id' in res 
        ? this.router.navigate(['/profile/' + res?._id])
        : console.log('404'))
  }
}
