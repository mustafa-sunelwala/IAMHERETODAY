import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import { API_BASE_URL } from "../constants/app.constants";

@Injectable()
export class PaginationService {

  constructor(private http: Http){}  
  public getAll (page) {
    return this.http.get(API_BASE_URL + "locations/getall/"+page)
        .map(data => {
            return data.json();
        });
  }

}
