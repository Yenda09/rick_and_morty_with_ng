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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllLocations()
      .subscribe (data => {
        this.allLocations = data.results
      })
  }

}
