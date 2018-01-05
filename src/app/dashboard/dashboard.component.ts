/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
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

  constructor(public loginService: LoginService, public dashboardService: DashboardService){}
  public ngOnInit() {
    console.log('Dashboard Component');
    this.user_id = window.localStorage.getItem('user_id');
    this.getLocations();
    this.getUserLocations();
    this.getUserInfo();
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
