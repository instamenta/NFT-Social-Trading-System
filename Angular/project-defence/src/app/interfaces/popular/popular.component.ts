import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/auth/nft.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  nftsData: any | null = null

  constructor(private nftService: NftService) { }
  
  ngOnInit(): void {
    this.nftsData = this.nftService.loadMostWantedAll()
  }
}
