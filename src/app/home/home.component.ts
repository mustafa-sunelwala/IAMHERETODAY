import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    this.getPostsData();
  }

  public getPostsData() {
    this.homeService.getPostsData().subscribe(
      data => {
        console.log("posts data ::",data);
      }
    );
  }
}
