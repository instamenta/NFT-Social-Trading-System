import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  nftsData: any | null = null

  constructor(private nftService: NftService) { }
  
  ngOnInit(): void {
    this.nftService.loadMostWanted(6)
      .subscribe((nftsData) => {
        this.nftsData = nftsData
      })
  }
}
