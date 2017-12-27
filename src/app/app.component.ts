/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public appState: AppState) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
