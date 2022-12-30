import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api/api.service";

import { Character } from "src/app/models/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCharacters: Character[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllCharacters()
      .subscribe (data => {
        this.allCharacters = data.results
        console.log(data)
      })
  }

}