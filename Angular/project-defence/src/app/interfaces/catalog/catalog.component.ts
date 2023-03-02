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
  currentUserData: any = false;

  searchText: string = '';
  searchData: any = [];
  searchCriteria: boolean = false;
  notFound: boolean = false
  notSearching: boolean = true;
  checkboxValue: boolean = false;
  checkboxText: boolean = true;

  constructor(
    private nftService: NftService,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.nftsData = this.nftService.loadNfts()
      // .subscribe(data => this.nftsData = data);

    this.userService.getUserData()
      .subscribe(userData => {
        if (!('username' in userData)) return;
        this.currentUserData = userData;
      })
  }
  search() {
    this.searchData = this.nftsData.filter((data: any) => {
      if (this.checkboxValue === true) {
        return data.name.toLowerCase().includes(this.searchText.toLowerCase())
          && !data.owners.includes(this.currentUserData.username);
      } else {
        return data.name.toLowerCase().includes(this.searchText.toLowerCase());
      }
    });
    if (this.searchData.length > 0) {
      this.searchCriteria = true
      this.notFound = false

      this.searchText.length <= 0
        ? this.notSearching = true
        : this.notSearching = false;
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
        if (this.searchText?.length > 0) {
          return data.name.toLowerCase().includes(this.searchText.toLowerCase());
        } else {
          return data.hasOwnProperty('name');
        }
      })
    } else {
      this.checkboxText = false;
      const dataArray = this.nftsData.filter((data: any) => {
        if (this.searchText.length > 0) {
          return data.name.toLowerCase().includes(this.searchText.toLowerCase())
            && !data.owners.includes(this.currentUserData.username);
        } else {
          return !data.owners.includes(this.currentUserData.username);
        }
      })
      this.searchData = dataArray;
    }
  }
}