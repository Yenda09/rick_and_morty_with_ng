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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllEpisodes()
      .subscribe (data => {
        this.allEpisodes = data.results
      })
  }

}
