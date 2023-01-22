import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from 'src/app/services/api/api.service';
import { LocationModel } from 'src/app/models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  allLocations: LocationModel[] = [];
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
          this.apiService.getAllLocations(this.page)
            .subscribe (data => {
              this.allLocations = data.results
            })
        }
      })
  }

  onPrevPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllLocations(this.page)
      .subscribe (data => {
        this.allLocations = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }

  onNextPage (pageNumber: string){
    this.page = pageNumber;
    this.apiService.getAllLocations(this.page)
      .subscribe (data => {
        this.allLocations = data.results;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
  }
}
