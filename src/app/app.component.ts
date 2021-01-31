import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState
} from '@aws-amplify/ui-components';

import { AuthService } from './service/auth.service';

import { I18n } from "aws-amplify";
import "./traslations/auth-traslate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  isAuth: boolean = false;

  public user: CognitoUserInterface | undefined;

  authState: AuthState;

  constructor(public AuthService: AuthService){
    I18n.setLanguage("en-US");
  }

  ngOnInit() {
    onAuthUIStateChange(async (authState, authData) => {
      this.user = authData as CognitoUserInterface;
      this.authState = authState;
      this.isAuth = (typeof this.user !== 'undefined');
      if (this.isAuth) {  
        //code for authentication flow// 

      } else {
        //exceptions//

      }
    });
  }

  onLogout() {
     this.AuthService.signOut().finally();
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}