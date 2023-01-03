import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  nftsData: any | null = null

  searchText: String = '';
  searchCriteria: any = false;
  searchData: any = [];
  notFound: any = false
  notSearching: any = true;

  checkboxValue: any = false;
  checkboxText: any = true;

  currentUserData: any = false;
  constructor(
    private nftService: NftService,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.nftService.loadNfts()
      .subscribe((data) => { this.nftsData = data })
    this.userService.getUserData()
      .subscribe(userData => {
        if (!userData.hasOwnProperty('username')) return
        this.currentUserData = userData
      })
  }
  search() {
    this.searchData = this.nftsData.filter((data: any) => {
      if (this.checkboxValue == true) {
        return data.name.toLowerCase().includes(this.searchText.toLowerCase()) && !data.owners.includes(this.currentUserData.username)
      } else {
        return data.name.toLowerCase().includes(this.searchText.toLowerCase())
      }
    });
    if (this.searchData.length > 0) {
      this.searchCriteria = true
      this.notFound = false

      if (this.searchText.length <= 0) {
        this.notSearching = true;
      } else {
        this.notSearching = false;
      }
    } else {
      this.searchCriteria = false

      if (this.searchText.length > 0) {
        this.notFound = true
        this.notSearching = false;
      } else {
        this.notSearching = true;
      }
    }
  }
  switchHandler($event: any) {
    if (this.checkboxValue == true) {
      this.checkboxText = true;
      this.searchData = this.nftsData.filter((data: any) => {
        if (this.searchText.length > 0) {
          console.log(1)
          return data.name.toLowerCase().includes(this.searchText.toLowerCase())
        }
        console.log(2)
        return data.hasOwnProperty('name')
      })
    } else {
      this.checkboxText = false;
      const dataArray = this.nftsData.filter((data: any) => {
        if (this.searchText.length > 0) {
          return data.name.toLowerCase().includes(this.searchText.toLowerCase()) && !data.owners.includes(this.currentUserData.username)
        }
        return !data.owners.includes(this.currentUserData.username)
      })
      this.searchData = dataArray
      console.log(dataArray)
    }
  }
}