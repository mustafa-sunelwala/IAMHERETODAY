import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from './location.service';
import { LoginService } from "../../login/login.service";

@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  private locations: Array<any> = [];
  private errorMsg: String = '';
  private locName: String = '';

  constructor(private loginService: LoginService, private locationService: LocationService){}

  public ngOnInit() {
    console.log('Location Component');
    this.getLocations();
  }

  public getLocations() {
    this.loginService.getLocations().subscribe(
      data => {
        this.locations = data;
      }
    );
  }
  
  
  public addLocation(){

    if(this.locName == ''){
      this.errorMsg = "Please fill required fields.";
    }else{
      let postData = {
       name: this.locName
      };
  
      this.locationService.addLocation(postData).subscribe(
       data => {
        if(data.status == '1'){
        this.getLocations();
        this.locName = '';
        }
        }
      );
    }
  }

  public deleteLocation(user_id) {
    let data = {
      id: user_id
    };
    this.locationService.deleteLocation(data).subscribe(
      data => {
        if(data.status == '1'){
          this.getLocations();
        }
      }
    );
  }
}
