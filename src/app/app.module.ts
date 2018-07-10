import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{AngularFireModule}from 'angularfire2';
import { AppComponent } from './app.component';
import {ReversePipe}from './datePipe';
import { NavbarComponent } from './navbar/navbar.component'
export const firebaseConfig={
  apiKey: "AIzaSyA43YWVWS9dJjEwWS2KE-wMy3TFAaF6tig",
  authDomain: "tasosapp-4d79b.firebaseapp.com",
  databaseURL: "https://tasosapp-4d79b.firebaseio.com",
  projectId: "tasosapp-4d79b",
  storageBucket: "tasosapp-4d79b.appspot.com",
  messagingSenderId: "908975523018"
}

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    NavbarComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
