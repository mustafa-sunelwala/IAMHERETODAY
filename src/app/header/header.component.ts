import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('header component');
  }
}
