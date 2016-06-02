import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'pagination',
  inputs: ['totalPage'],
  templateUrl: 'src/Angular2-components/pagination/pagination.html',
  styleUrls: ['src/app.css']
})
export class Pagination implements OnInit {
  @Input() totalPage: any;
  @Output() nextPage = new EventEmitter();

  page: number = 1;
  pagination_array: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.pagination();
  }

  pagination(pageNumber?: number) {
    
    // If Cell Clicked
    if (pageNumber) {
      this.nextPage.emit({ page: pageNumber });

      if (pageNumber == this.page) {
        console.log("Dont try to be Over Smart !!!!");
        return;
      }
      else if (pageNumber != this.page) {
        this.page = pageNumber;
      }
    }
    // If Cell Clicked    
    
    if (this.page + 5 > this.totalPage) {
      this.pagination_array = [];

      if (this.totalPage > 5) {
        let dummyPage = (this.page + 5) - this.totalPage;
        for (let i = this.page - dummyPage; i < this.totalPage; i++) {
          this.pagination_array.push(i);
        }
      }
      else if (this.totalPage < 5) {
        for (let i = 1; i < this.totalPage; i++) {
          this.pagination_array.push(i);
        }
      }
    }

    else if (this.page + 5 < this.totalPage) {
      this.pagination_array = [];

      for (let i = this.page; i < this.page + 5; i++) {
        this.pagination_array.push(i);
      }
    }
    // console.log(this.pagination_array);
  }

  // For Last Page Button
  
  lastPage(lastPage) {
    this.nextPage.emit({ page: lastPage });
    this.page = lastPage;
  }
  // For Next Page Button
  
  nextPageFun() {
    if (this.page < this.totalPage) {
      this.page = this.page + 1;
      this.nextPage.emit({ page: this.page });
      this.pagination();
    }
  }
  
  // For Previous Page Button
  
  PrevPageFun() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.nextPage.emit({ page: this.page });
      this.pagination();
    }
  }
}