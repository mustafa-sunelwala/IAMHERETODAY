import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../../constants/app.constants";

@Injectable()
export class UserService {
  constructor(private http: Http){}  
  
  public addUser (data) {
    return this.http.post(API_BASE_URL + "users/add", data)
        .map(data => {
            return data.json();
        });
  }

  public deleteUser (data) {
    return this.http.post(API_BASE_URL + "users/delete", data)
        .map(data => {
            return data.json();
        });
  }
}
