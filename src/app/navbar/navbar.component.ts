import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import{AngularFire,AuthProviders,AuthMethods}from 'angularfire2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<string>();

@Input() isLoggedin:boolean
  constructor(private af:AngularFire) { }

  ngOnInit() {
    this.isLoggedin=false;
  }

  logoutChild(){
    this.uploaded.emit('logout');
  }

}
