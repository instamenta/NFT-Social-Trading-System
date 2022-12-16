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
  loadNftByLink(url: any) {
    return this.http.post<any>('http://localhost:3031/nft/url', {url})
  }
  createNft(name: any, description: any, price: any,pic: any, userData: any) {
    return this.http.post<any>('http://localhost:3031/nft/upload', {name, description,price, pic, userData})
  }
  editNft(name: any, description: any, price: any,pic: any,id:any) {
    return this.http.post<any>(`http://localhost:3031/nft/catalog/${id}/edit`, {name, description,price, pic})
  }
  
  deleteNft(id:any) {
    return this.http.get<any>(`http://localhost:3031/nft/catalog/${id}/delete`)
  }
}
