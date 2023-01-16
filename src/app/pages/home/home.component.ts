import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api/api.service";

import { Character } from "src/app/models/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCharacters: Character[] = [];
  page: number = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllCharacters(this.page)
      .subscribe (data => {
        this.allCharacters = data.results
      })
  }

  onPrevPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllCharacters(this.page)
      .subscribe (data => {
        this.allCharacters = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
  onNextPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllCharacters(this.page)
      .subscribe (data => {
        this.allCharacters = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
}