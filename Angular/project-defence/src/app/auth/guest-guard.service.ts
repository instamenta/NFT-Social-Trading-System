import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService  implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate() {
    if (!this.cookieService.get('userData')) {
      // Allow the route to be activated
      return true;
    } else {
      // Redirect the user to the login page
      this.router.navigate(['/']);
      return false;
    }
  }
}
