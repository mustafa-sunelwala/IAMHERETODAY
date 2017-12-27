import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('Location Component');
  }
}
