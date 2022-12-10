import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(username: any, email: any ,birthday: any, password: any) {
    return this.http.post('http://localhost:3031/users/register', { username,email,birthday,password })
  } 
  loginUser(username: any, password: any) {
    return this.http.post('http://localhost:3031/users/login', {username, password})
  }
  getUser(id: any) {
    return this.http.get('http://localhost:3031/profile/' + id)
  }
  editUser(id: any ,username:any, email: any) {
    return this.http.post(`http://localhost:3031/profile/${id}/edit`, { username, email })
  }
  editUserDescription(id: any, description: any) {
    return this.http.post(`http://localhost:3031/profile/${id}/edit-bio`, { description })
  }
  // editUserProfilePicture()
  
}
