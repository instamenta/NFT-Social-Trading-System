import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as e from 'cors';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  usernameError: any;
  passwordError: any;
  loginError: any;
  responseMessage: any;
  tokenValue: any;

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
   ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

  }

  onSubmit() {
    const usernameControl = this.form.get('username')
    const passwordControl = this.form.get('password')

    if (this.form.valid) {
      const username = usernameControl?.value

      const password = passwordControl?.value

      this.userService.loginUser(username, password)
        .subscribe((response) => {
          
          console.log(response)
          console.log("nice")
          this.responseMessage = response

          if (this.responseMessage.message) {
            this.loginError = true
          } else {
            this.cookieService.set('userData',this.responseMessage?.token)
            localStorage.setItem('userData', this.responseMessage?.token)
            this.router.navigateByUrl('/');
          }
        })

    } else {

      if (usernameControl?.hasError) {
        this.usernameError = true
      }

      if (passwordControl?.hasError) {
        this.passwordError = true
      }

    }
  }

}
