import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string
  password: string
  title = 'Tasks';
  isLoggedin: boolean
  errorMessage: string
  task: string
  taskDate
  todos: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.taskDate = new Date()
  }

  fixDate(){
    var local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    this.taskDate=local.toJSON().slice(0,10);
  }

  ngOnInit() {
    this.af.auth.subscribe(authState => {

    })
    this.fixDate();
  }

  register() {
    this.af.auth.createUser({
      email: 'tssardelis@gmail.com',
      password: '18082007'
    })
      .then(authState => {
        authState.auth.sendEmailVerification()
      })
      .catch(authState => { console.log("error ", authState) })
  }

  login() {
    this.af.auth.login({
      email: this.username,
      password: this.password
    }, {
        method: AuthMethods.Password,
        provider: AuthProviders.Password
      })
      .then(resp => {
        console.log("Logged in", resp)
        this.isLoggedin = true;
        // const test=this.af.database.list('/tasks').subscribe(res=>this.countries=res)

        this.todos = this.af.database
          .list('/tasks',{
            query:{
            orderByChild:'date'
            }
          })
        // this.todos=_.sortBy(this.todos,e=>e.date)
      })
      .catch(err => {
        console.log(err)
        this.errorMessage = err.message;
      })
  }


  logout() {
    this.af.auth.logout()
      .then(resp => {
        console.log("Logged out")
        this.isLoggedin = false;
      })
      .catch(err => { console.log(err) })
  }

  changeDate(key){
    this.af.database.object('/tasks/'+key).update({
      date:+(new Date(this.taskDate))
    })
  }

  add() {
    this.taskDate=new Date(this.taskDate)
    this.todos.push({
      value: this.task,
      done: false,
      date: +this.taskDate
    })
    this.task = '';
    this.fixDate();
  }

  check(key) {
    this.af.database.object('/tasks/' + key).update({
      done: true
    })
  }

  remove(key) {
    this.af.database.object('/tasks/' + key).remove()
      .then(res => { console.log('removed', res) })
      .catch(err => { console.log(err) })
  }
}
