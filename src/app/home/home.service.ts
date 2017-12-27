import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../constants/app.constants";

@Injectable()
export class HomeService {
  constructor(private http: Http){}  
  public getPostsData () {
    return this.http.get(API_BASE_URL + "users")
        .map(data => {
            return data.json();
        });
  }
}
