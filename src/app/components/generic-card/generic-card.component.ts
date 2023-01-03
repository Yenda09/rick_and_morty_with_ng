import { Component, OnInit, Input } from '@angular/core';
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
  }
  @Input() episode: Episode = {
    id: 0,
    name: '',
    air_date: '',
    characters: [''],
    url: '',
    created: '',
  }
  @Input() location: LocationModel = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [''],
    url: '',
    created: '',
  }

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
    if (myPathName === '/episodes'){
      this.homePage = false;
      this.episodePage = true;
      this.locationPage = false;
    } else if (myPathName === '/locations'){
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