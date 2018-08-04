import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from './custom-validators.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  private data:Array<any> = [];
  private page: Number = 1;
  private pages:Array<Number>;
  public signUpForm: FormGroup;
  public loading: Boolean = false;
  constructor(public paginationService: PaginationService,public form: FormBuilder){}
  
  ngOnInit() {
    this.buildForm();
    this.getAllRecord();
  }
  
  public signUp() {
    // do sign up logic here
  }

  public buildForm() {
    this.signUpForm = this.form.group({
      name: ['', [Validators.required, CustomValidators.validateCharacters]]
    });
  }

  public setPage(i, event:any){
    event.preventDefault();
     this.page = i;
     this.getAllRecord();
  }
  public getAllRecord() {
    this.loading = true;
    this.paginationService.getAll(this.page).subscribe(
      data => {
        this.data = data.products;
        this.pages = new Array(data.pages);
        this.loading = false;
      }
    );
  }
}
