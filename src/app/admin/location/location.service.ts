import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../../constants/app.constants";

@Injectable()
export class LocationService {
    
  constructor(private http: Http){}  

  public addLocation(data){
    return this.http.post(API_BASE_URL + "locations/add", data)
    .map(data => {
        return data.json();
    });
  }

  public deleteLocation(data){
    return this.http.post(API_BASE_URL + "locations/delete", data)
    .map(data => {
        return data.json();
    });
  }
  
  
}
