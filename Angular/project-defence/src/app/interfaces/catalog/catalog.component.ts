import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  nftsData: any | null = null  

  searchText: any;
  searchCriteria: any = false;
  searchData: any = [];
  notFound: any = false
  notSearching:any = true;

  checkboxValue: any = false;
  checkboxText: any = true;
  constructor(private nftService: NftService) {}

  ngOnInit(): void {
    this.nftService.loadNfts()
    .subscribe((data) => { this.nftsData = data})
  }
  search() {
    this.searchData = this.nftsData.filter((data: any) => {
      return data.name.toLowerCase().includes(this.searchText.toLowerCase())
  });
    if(this.searchData.length > 0) {
      this.searchCriteria = true
      this.notFound = false
      
      if(this.searchText.length <= 0) {
        this.notSearching = true;
      } else {
        this.notSearching = false;
      }
    } else {
      this.searchCriteria = false
      
      if(this.searchText.length > 0) {
        this.notFound = true
        this.notSearching = false;
      } else {
        this.notSearching = true;
      }
    }
  }
  switchHandler($event: any) {
    console.log(this.checkboxValue)
    console.log($event.target)
    if(this.checkboxValue == true) {
      this.checkboxText = true;
    } else {
      this.checkboxText = false;
    }
  }
}
