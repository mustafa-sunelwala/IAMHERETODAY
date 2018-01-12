/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private locations:Array<any> = [];
  private userLocations:Array<any> = [];
  private username: String = '';
  private user_id: String = '';

  constructor(public loginService: LoginService, public dashboardService: DashboardService, private router: Router){}
  public ngOnInit() {
    console.log('Dashboard Component');
    this.user_id = window.localStorage.getItem('user_id');
    if(this.user_id){
      this.getLocations();
      this.getUserLocations();
      this.getUserInfo();
    }else{
      this.router.navigate(['/login']);
    }
  }

  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
      }
    );
  }

  public getUserInfo() {
    this.dashboardService.getUserInfo(this.user_id).subscribe(
      data => {
        this.username = data.name;
      }
    );
  }

  public getUserLocations() {
    this.dashboardService.getUserLocations(this.user_id).subscribe(
      data => {
        this.userLocations = data;
      }
    );
  }

  public removeLoginLocation(id) {
    if(confirm('Are you sure to Remove this Locaton?')){
      let data = {
        id: id,
        user_id: this.user_id
      }
      this.dashboardService.removeLoginLocation(data).subscribe(
        data => {
          this.userLocations = data;
        }
      );
    }
  }
}
