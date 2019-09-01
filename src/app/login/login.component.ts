import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseAuthenticationService } from '../services/authentication/firebase-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email, Validators.minLength(5)]], 
    password: ["", [Validators.required, Validators.minLength(5)]]
  });
  
  constructor(private formBuilder: FormBuilder, private firebaseAuthenticationService : FirebaseAuthenticationService) { 
  }

  ngOnInit() {

  }
  register(){
    let { email, password } = this.loginFormGroup.value;
    this.firebaseAuthenticationService.registerWithEmail({
      email: email, 
      password: password
    });
  }
  submit(){
    let { email, password } = this.loginFormGroup.value;
    this.firebaseAuthenticationService.loginWithEmail({
      email: email, 
      password: password
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.loginFormGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  public getGenericError(controlName: string){
    return this.loginFormGroup.get(controlName);
  }
  public getEmailError(){
    return this.loginFormGroup.get("email");
  }
  public getPasswordError(){
    return this.loginFormGroup.get("password");
  }
}
