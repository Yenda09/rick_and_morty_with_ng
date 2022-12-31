import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {
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
    image: '',
    episode: [''],
    url: '',
    created: '',
  }
  @Input() episode: Episode = {
    id: 0,
    name: '',
    air_date: '',
    characters: [''],
    url: '',
    created: '',
  }

  homePage: boolean = false;
  episodePage: boolean = true;
  locationPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
