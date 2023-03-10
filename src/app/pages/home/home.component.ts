import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "src/app/services/api/api.service";
import { Character } from "src/app/models/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCharacters: Character[] = [];
  page: string | null = '1';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe (params => {
        this.page = params.get('page')

        if (this.page != null){
          this.apiService.getAllCharacters(this.page)
            .subscribe (data => {
              this.allCharacters = data.results
            })
        }
      })
  }

  onPrevPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllCharacters(this.page)
      .subscribe (data => {
        this.allCharacters = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
  onNextPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllCharacters(this.page)
      .subscribe (data => {
        this.allCharacters = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
}