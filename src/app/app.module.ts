import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LinkedInSdkModule } from 'angular-linkedin-sdk';

import { GoogleSigninComponent } from './app.component';

@NgModule({
  declarations: [
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LinkedInSdkModule
  ],
  providers: [],
  bootstrap: [GoogleSigninComponent]
})
export class AppModule { }
//7842ficiaik137  78qcfv1qw6cn34