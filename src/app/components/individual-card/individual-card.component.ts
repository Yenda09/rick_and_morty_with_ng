import { Component, OnInit, Input } from '@angular/core';

import { Character } from 'src/app/models/character.model';
import { Episode } from 'src/app/models/episode.model';
import { LocationModel } from 'src/app/models/location.model';

@Component({
  selector: 'app-individual-card',
  templateUrl: './individual-card.component.html',
  styleUrls: ['./individual-card.component.scss']
})
export class IndividualCardComponent implements OnInit {
  @Input() character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    image: 'www',
    episode: [''],
    url: '',
    created: '',
  };
  @Input() episode: Episode = {
    id: 0,
    name: 'test',
    air_date: '',
    episode: '',
    characters: [''],
    url: '',
    created: '',
  };
  @Input() location: LocationModel = {
    id: 0,
    name: 'test',
    type: '',
    dimension: '',
    residents: [''],
    url: '',
    created: '',
  };

  individualCharacterPage: boolean = false;
  individualEpisodePage: boolean = false;
  individualLocationPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.navigator();
  }

  navigator (){
    let myPathName = window.location.pathname;

    if (myPathName.startsWith('/item/episode')){      
      this.individualCharacterPage = false;
      this.individualEpisodePage = true;
      this.individualLocationPage = false;
    } else if (myPathName.startsWith('/item/location')){
      this.individualCharacterPage = false;
      this.individualEpisodePage = false;
      this.individualLocationPage = true;
    } else {
      this.individualCharacterPage = true;
      this.individualEpisodePage = false;
      this.individualLocationPage = false;
    }
  }
}
