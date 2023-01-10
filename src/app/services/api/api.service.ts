import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { ApiResponseCharacters, ApiResponseEpisodes, ApiResponseLocations } from 'src/app/models/api-response.model';
import { Character} from 'src/app/models/character.model'
import { Episode } from 'src/app/models/episode.model';
import { LocationModel } from 'src/app/models/location.model';

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
  getCharacterById (id: number){
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`)
  }

  getAllEpisodes (page: number){
    return this.http.get<ApiResponseEpisodes>(`${this.apiUrl}/episode`, {
      params: { page }
    });
  }
  getEpisodeById (id: number){
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`)
  }

  getAllLocations (page: number){
    return this.http.get<ApiResponseLocations>(`${this.apiUrl}/location`, {
      params: { page }
    });
  }
  getLocationById (id: number){
    return this.http.get<LocationModel>(`${this.apiUrl}/location/${id}`)
  }
}
