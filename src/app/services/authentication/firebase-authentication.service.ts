import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { IFirebaseAuthentication } from 'src/app/contract-services/authentication/ifirebase-authentication.service';
import { User } from 'src/app/model-interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService{
  getState() {
     this.angularFireAuth.authState;
  }
  registerWithEmail(object: User){
    let { email, password  } = object;
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  loginWithEmail(object: User){
    let { email, password  } = object;
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  logout(){
    this.angularFireAuth.auth.signOut();
  }
  constructor(private angularFireAuth: AngularFireAuth) { }
}
