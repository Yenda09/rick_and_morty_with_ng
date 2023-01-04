import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { ApiResponseCharacters, ApiResponseEpisodes, ApiResponseLocations } from 'src/app/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters (page: number){
    return this.http.get<ApiResponseCharacters>(`${this.apiUrl}/character`, {
      params: { page }
    });
  }

  getAllEpisodes (page: number){
    return this.http.get<ApiResponseEpisodes>(`${this.apiUrl}/episode`, {
      params: { page }
    });
  }

  getAllLocations (page: number){
    return this.http.get<ApiResponseLocations>(`${this.apiUrl}/location`, {
      params: { page }
    });
  }
}
