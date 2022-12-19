import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  registerUser(username: any, email: any, birthday: any, password: any) {
    return this.http.post('http://localhost:3031/users/register', { username, email, birthday, password })
  }
  loginUser(username: any, password: any) {
    return this.http.post('http://localhost:3031/users/login', { username, password })
  }
  getUser(id: any) {
    return this.http.get('http://localhost:3031/profile/' + id)
  }
  editUser(id: any, username: any, email: any) {
    return this.http.post(`http://localhost:3031/profile/${id}/edit`, { username, email }).subscribe((result) => {
    })
  }
  editUserDescription(id: any, description: any) {
    return this.http.post(`http://localhost:3031/profile/${id}/edit-bio`, { description }).subscribe((result) => {
    })
  }

  getUserData() {
    let token: any = this.cookieService.get('userData')
    if (!token) {
      token = "NOTOKEN"
    }
    return this.http.post('http://localhost:3031/users/decodeToken', { token })

  }
  getAllUsers() {
    return this.http.get('http://localhost:3031/users/get-all-users')
  }
  changeProfilePicture(id: any, url: any) {
    return this.http.post(`http://localhost:3031/profile/${id}/select-profile-picture`, { url })
  }

  getUserName(username: any) {
    return this.http.get(`http://localhost:3031/profile/${username}/username`)

  }
}
