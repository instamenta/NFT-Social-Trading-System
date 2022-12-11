import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent{
  
    form: FormGroup;
    usernameError: any;
    emailError: any;
    passwordError: any;
    birthdayError: any;

    constructor(private formBuilder: FormBuilder, private http: HttpClient) {
      this.form = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        birthday: ['', Validators.required],
      });

    }
  
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
        {
          username,
          email,
          password,
          birthday
        }
        )
    .subscribe((response) => {
      console.log(response)
      console.log("nice")
    })
    
      } else {

        if(usernameControl?.hasError) {
          this.usernameError=true
        } 
        if(emailControl?.hasError) {
          this.emailError=true
        } 
        if(passwordControl?.hasError) {
          this.passwordError=true
        } 
        if(birthdayControl?.hasError) {
          this.birthdayError=true
        } 
      }
    }
  }

    
  // onSubmit() {
  //   
  // }

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register-form',
//   templateUrl: './register-form.component.html',
//   styleUrls: ['./register-form.component.css']
// })


