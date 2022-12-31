import { ApiInfo } from "./api-info.model";
import { Character } from "./character.model";
import { Episode } from "./episode.model";
import { LocationModel } from "./location.model";

export interface ApiResponseCharacters {
  info: ApiInfo;
  results: Character[];
}

export interface ApiResponseEpisodes {
  info: ApiInfo;
  results: Episode[];
}

export interface ApiResponseLocations {
  info: ApiInfo;
  results: LocationModel[];
}