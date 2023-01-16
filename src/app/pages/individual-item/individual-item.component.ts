import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/character.model';
import { Episode } from 'src/app/models/episode.model';
import { LocationModel } from 'src/app/models/location.model';

import { ApiService } from 'src/app/services/api/api.service'

@Component({
  selector: 'app-individual-item',
  templateUrl: './individual-item.component.html',
  styleUrls: ['./individual-item.component.scss']
})
export class IndividualItemComponent implements OnInit {

  itemSection: string | null = null;
  itemId: string | null = null;

  oneCharacter!: Character;
  oneEpisode!: Episode;
  oneLocation!: LocationModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe( params => {
        this.itemSection =  params.get('section');
        this.itemId = params.get('id');
        
        if (this.itemSection === 'character' && this.itemId){
          this.apiService.getCharacterById(this.itemId)
            .subscribe (data => {
              this.oneCharacter = data;
            })
        } else if (this.itemSection === 'episode' && this.itemId){
          this.apiService.getEpisodeById(this.itemId)
            .subscribe (data => {
              this.oneEpisode = data;
            })
        } else if (this.itemSection === 'location' && this.itemId){
          this.apiService.getLocationById(this.itemId)
            .subscribe (data => {
              this.oneLocation = data;
            })
        }
      })
  }

}
