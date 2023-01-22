import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Output() prev = new EventEmitter<string>();
  @Output() next = new EventEmitter<string>();
  
  pageNumber: number = 1;
  emittedNumber: string = '1';
  maxNumberPage: number = 42;
  
  constructor() { }

  ngOnInit(): void {
    this.whereIam();
  }

  whereIam (){
    let myPathName = window.location.pathname;
    if (myPathName.startsWith('/episodes')){
      this.maxNumberPage = 3;
    } else if (myPathName.startsWith('/locations')){
      this.maxNumberPage = 7;
    } else {
      this.maxNumberPage = 42;
    }
  }

  prevPage(){
    if (this.pageNumber !== 1){
      this.pageNumber -= 1;
      this.emittedNumber = this.pageNumber.toString();
      this.prev.emit(this.emittedNumber);
    }
  }
  nextPage (){
    if (this.pageNumber < this.maxNumberPage){
      this.pageNumber += 1;
      this.emittedNumber = this.pageNumber.toString();
      this.next.emit(this.emittedNumber);
    }
  }
}
