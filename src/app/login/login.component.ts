/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private locations: Array<any> = [];
  private users: Array<any> = [];
  public location: String = '';
  public user: String = '';
  private disableUserDropdown: Boolean = false;
  public errorMsg: String = '';

  constructor(public loginService: LoginService, private router: Router){}

  public ngOnInit() {
    this.getUsers();
    this.getLocations();

    //get existing user id from localStorage
    let user_id = window.localStorage.getItem('user_id');
    if(user_id){
      this.user = user_id;
      this.disableUserDropdown = true;
    }
  }

  // This method is used to get all users from backend server.
  public getUsers() {
    this.loginService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  // This method is used to get all locations from backend server.
  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
      }
    );
  }

  public login(){
    if(this.user == '' || this.location == ''){
      this.errorMsg = "Please select required fields.";
    }else{
      let postData = {
        user_id: this.user,
        location_id: this.location
      }
  // This method is used to sign-in for a particular location
      this.loginService.addLocation(postData).subscribe(
        data => {
          window.localStorage.setItem('user_id', postData.user_id + '');
          if(data.status == '0'){
            alert(data.message);
          }else{
            this.router.navigate(['/dashboard']);
          }
        }
      );
    }
  }
}
