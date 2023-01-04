import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

import { LocationModel } from 'src/app/models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  allLocations: LocationModel[] = [];
  page: number = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllLocations(this.page)
      .subscribe (data => {
        this.allLocations = data.results
      })
  }

  onPrevPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllLocations(this.page)
      .subscribe (data => {
        this.allLocations = data.results
      })
  }

  onNextPage (pageNumber: number){
    this.page = pageNumber;
    this.apiService.getAllLocations(this.page)
      .subscribe (data => {
        this.allLocations = data.results
      })
  }
}
