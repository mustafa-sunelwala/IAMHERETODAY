/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public ngOnInit() {
    console.log('dashboard');
  }

}
