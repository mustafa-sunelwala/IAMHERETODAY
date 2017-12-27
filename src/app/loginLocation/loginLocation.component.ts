/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'loginLocation',
  templateUrl: './loginLocation.component.html'
})
export class LoginLocationComponent implements OnInit {


  public ngOnInit() {
    console.log('Initial App State');
  }

}
