import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) {
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
//       this.http.post('http://localhost:3031/users/login',
//       {
//         username,
// password,
//       }
//       )
  this.userService.loginUser(username, password)
  .subscribe((response) => {
    console.log(response)
    console.log("nice")
    this.responseMessage = response
    if(this.responseMessage.message) {
      this.loginError = true
    }
  })
  
    } else {

      if(usernameControl?.hasError) {
        this.usernameError=true
      } 

      if(passwordControl?.hasError) {
        this.passwordError=true
      } 

    }
  }
  
}
