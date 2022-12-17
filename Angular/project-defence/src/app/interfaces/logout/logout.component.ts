import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{


  constructor(
    private cookieService: CookieService,
    private router: Router,) {}

  ngOnInit(): void {
    this.cookieService.deleteAll()
    this.router.navigateByUrl('/')
    location.reload()

  }
}
