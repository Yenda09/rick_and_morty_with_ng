import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Output() prev = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  
  pageNumber: number = 1;
  maxNumberPage: number = 42;
  
  constructor() { }

  ngOnInit(): void {
    this.whereIam();
  }

  whereIam (){
    let myPathName = window.location.pathname;
    if (myPathName === '/episodes'){
      this.maxNumberPage = 3;
    } else if (myPathName === '/locations'){
      this.maxNumberPage = 7;
    } else {
      this.maxNumberPage = 42;
    }
  }

  prevPage(){
    if (this.pageNumber !== 1){
      this.pageNumber -= 1;
      this.prev.emit(this.pageNumber);
    }
  }
  nextPage (){
    if (this.pageNumber < this.maxNumberPage){
      this.pageNumber += 1;
      this.next.emit(this.pageNumber);
    }
  }
}
