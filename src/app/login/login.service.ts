import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../constants/app.constants";

@Injectable()
export class LoginService {
  constructor(private http: Http){}  
  public getUsers () {
    return this.http.get(API_BASE_URL + "users")
        .map(data => {
            return data.json();
        });
  }

  public getLocations () {
    return this.http.get(API_BASE_URL + "locations")
        .map(data => {
            return data.json();
        });
  }

  public addLocation(data){
    return this.http.post(API_BASE_URL + "addLocation", data)
    .map(data => {
        return data.json();
    });
  }
}
