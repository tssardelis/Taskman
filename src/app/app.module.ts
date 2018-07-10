import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{AngularFireModule}from 'angularfire2';
import { AppComponent } from './app.component';
import {ReversePipe}from './datePipe';
import { NavbarComponent } from './navbar/navbar.component'
export const firebaseConfig={
  
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
