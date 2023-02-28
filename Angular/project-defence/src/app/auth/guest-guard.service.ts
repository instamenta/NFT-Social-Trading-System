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
      // ALLOWS the ROUTE to be ACTIVATED
      return true;
    } else {
      // REDIRECTS the USER to the LOGIN page
      this.router.navigate(['/']);
      return false;
    }
  }
}
