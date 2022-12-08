import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUser() {
    return this.http.get<any>('http://localhost:3031/nft/catalog/most-wanted/6')
  }
}
