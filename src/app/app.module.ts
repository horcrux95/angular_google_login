import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LinkedInSdkModule } from 'angular-linkedin-sdk';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LinkedInSdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//7842ficiaik137  78qcfv1qw6cn34