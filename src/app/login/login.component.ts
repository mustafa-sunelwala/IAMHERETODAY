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
        console.log("this.users ::", this.users);
      }
    );
  }

  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
        console.log("this.locations ::", this.locations);
      }
    );
  }
}
