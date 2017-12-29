import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../constants/app.constants";

@Injectable()
export class DashboardService {
  constructor(private http: Http){}  
  public getUserLocations (user_id) {
    var data = { user_id: user_id }; 
    return this.http.post(API_BASE_URL + "locations", data)
        .map(data => {
            return data.json();
        });
  }

  public getUserInfo (user_id) {
    return this.http.get(API_BASE_URL + "users/" + user_id)
        .map(data => {
            return data.json();
        });
  }
}
