/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private locations:Array<any> = [];
  constructor(private loginService: LoginService){}
  public ngOnInit() {
    this.getLocations();
  }

  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
      }
    );
  }

}
