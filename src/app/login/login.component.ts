/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private locations: Array<any> = [];
  private users: Array<any> = [];
  private location: String = '';
  private user: String = '';

  constructor(private loginService: LoginService){}

  public ngOnInit() {
    this.getUsers();
    this.getLocations();
  }

  public getUsers() {
    this.loginService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
      }
    );
  }

  public login(){
    let postData = {
      user_id: this.user,
      location_id: this.location
    }
    this.loginService.addLocation(postData).subscribe(
      data => {
        console.log('Successfull Login');
      }
    );
  }
}