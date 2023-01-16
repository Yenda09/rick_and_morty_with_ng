import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  allEpisodes: Episode[] = [];
  page: number = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllEpisodes(this.page)
      .subscribe (data => {
        this.allEpisodes = data.results
      })
  }

  onPrevPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllEpisodes(this.page)
      .subscribe (data => {
        this.allEpisodes = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }

  onNextPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllEpisodes(this.page)
      .subscribe (data => {
        this.allEpisodes = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
}
