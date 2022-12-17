import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  responseMessage: any;

  form: any = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    birthday: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private cookieService: CookieService,
    ) { }

  onSubmit() {
    const usernameControl = this.form.get('username')
    const emailControl = this.form.get('email')
    const passwordControl = this.form.get('password')
    const birthdayControl = this.form.get('birthday')

    if (this.form.valid) {
      const username = usernameControl?.value
      const email = emailControl?.value
      const password = passwordControl?.value
      const birthday = birthdayControl?.value
      this.http.post('http://localhost:3031/users/register',
        { username, email, password, birthday } )
        .subscribe((res) => {
          this.responseMessage = res
          this.cookieService.set('userData', this.responseMessage?.token)
          location.reload()
        })
    }
  }
}
