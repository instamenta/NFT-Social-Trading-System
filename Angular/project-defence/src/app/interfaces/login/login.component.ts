import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  form: any = this.formBuilder.group({
    username: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
    ]],
  });
  loginError: boolean = false;
  responseMessage: any;
  tokenValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
  ) { }

  onSubmit() {
    const usernameControl = this.form.get('username')
    const passwordControl = this.form.get('password')

    if (this.form.valid) {
      const username = usernameControl?.value
      const password = passwordControl?.value
      this.userService.loginUser(username, password)
        .subscribe((res : any) => {
          if (res.message) {
            this.loginError = true
          } else {
            this.cookieService.set('userData', res?.token)
            location.reload()
          }
        })
    }
  }
}
