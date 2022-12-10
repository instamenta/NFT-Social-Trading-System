import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  loadNfts() {
    return this.http.get<any>('http://localhost:3031/nft/catalog');
  }
  loadNft(id : any) {
    return this.http.get<any>('http://localhost:3031/nft/catalog/' + id);
  }
  loadMostWanted(index: any) {
    return this.http.get<any>('http://localhost:3031/nft/catalog/most-wanted/' + index);
  }
  loadMostWantedAll() {
    return this.http.get<any>('http://localhost:3031/nft/catalog/most-wanted');
  }
}
