import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination/pagination.service';

@Component({
  selector: 'app-michael',
  templateUrl: './michael.component.html',
  styleUrls: ['./michael.component.css']
})
export class MichaelComponent implements OnInit {
  private data:Array<any> = [];
  private page: Number = 1;
  private totalItems: Number ;
  private current:Number;
  constructor(public paginationService: PaginationService){

  }

  ngOnInit() {
    this.getAllRecord();
  }
  
  public pageChanged(e){
    this.page = e;
    this.getAllRecord();
  }
  public getAllRecord() {
    this.paginationService.getAll(this.page).subscribe(
      data => {
        console.log(data, 'data');
        this.data = data.products;
        this.totalItems = data.totalItems;
        this.current = data.current;
      }
    );
  }
}
