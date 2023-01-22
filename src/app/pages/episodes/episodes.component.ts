import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from 'src/app/services/api/api.service';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  allEpisodes: Episode[] = [];
  page: string | null = '1';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe (params => {
        this.page = params.get('page');

        if (this.page != null){
          this.apiService.getAllEpisodes(this.page)
            .subscribe (data => {
              this.allEpisodes = data.results
            })
        }
      })
  }

  onPrevPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllEpisodes(this.page)
      .subscribe (data => {
        this.allEpisodes = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }

  onNextPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllEpisodes(this.page)
      .subscribe (data => {
        this.allEpisodes = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
}
