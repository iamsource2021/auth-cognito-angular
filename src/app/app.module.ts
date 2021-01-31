import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthService } from './service/auth.service';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import Amplify from 'aws-amplify';
import awsconfig from './../aws-exports.js';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
