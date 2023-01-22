import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/character.model';
import { Episode } from 'src/app/models/episode.model';
import { LocationModel } from 'src/app/models/location.model';

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
  };
  @Input() episode: Episode = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [''],
    url: '',
    created: '',
  };
  @Input() location: LocationModel = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [''],
    url: '',
    created: '',
  };
  @Output() individualCharacter = new EventEmitter<number>();
  @Output() individualEpisode = new EventEmitter<number>();
  @Output() individualLocation = new EventEmitter<number>();

  homePage: boolean = true;
  episodePage: boolean = false;
  locationPage: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.navigator();
  }

  navigator (){
    let myPathName = window.location.pathname;
    if (myPathName.startsWith('/episodes')){
      this.homePage = false;
      this.episodePage = true;
      this.locationPage = false;
    } else if (myPathName.startsWith('/locations')){
      this.homePage = false;
      this.episodePage = false;
      this.locationPage = true;
    } else {
      this.homePage = true;
      this.episodePage = false;
      this.locationPage = false;
    }
  }
}