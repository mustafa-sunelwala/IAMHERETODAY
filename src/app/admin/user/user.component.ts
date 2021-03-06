import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../login/login.service";
import { UserService } from './user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  private users: Array<any> = [];
  public user: String = '';
  public errorMsg: String = '';

  constructor(public loginService: LoginService, public userService: UserService) {}

  public ngOnInit() {
    console.log('User Component');
    this.getUsers();
  }

  public getUsers() {
    this.loginService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  public addUser() {
    if(this.user == ''){
      this.errorMsg = "Please fill required fields.";
    }else{
      let data = {
        name: this.user
      };
      this.userService.addUser(data).subscribe(
        data => {
          if(data.status == '1'){
            this.getUsers();
            this.user = '';
          }
        }
      );
    }
  }

  public deleteUser(user_id) {
    if(confirm('Are you sure to delete this User?')){
      let data = {
        id: user_id
      };
      this.userService.deleteUser(data).subscribe(
        data => {
          if(data.status == '1'){
            this.getUsers();
          }
        }
      );
    }
  }
}
