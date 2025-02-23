import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="demoApp";
  provider:any;
  user:any;

  constructor(){

  }
  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });

  }

  logout(){
    firebase.auth().signOut().then(function() {
     console.log("sign out");
     
    }).catch(function(error) {
      // An error happened.
    });
  }

 
  loginWithGmail() {

    firebase.auth().signInWithPopup(this.provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    let credential:any;

     credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


  }

  facebookLogin(){
   
  var provider = new firebase.auth.FacebookAuthProvider();
  this.provider = provider;

  firebase.auth().signInWithPopup(provider).then((result) => {
    //let credential:any;
    //credential = result.credential;

    // The signed-in user info.
    

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //var accessToken = credential.accessToken;
    var user = result.user;
    console.log(user);

  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });


  }
 
  
}