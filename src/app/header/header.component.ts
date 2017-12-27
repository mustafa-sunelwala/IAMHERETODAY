import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: [ './header.component.css' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('hello `header` component');
  }
}
