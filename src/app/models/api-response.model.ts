import { ApiInfo } from "./api-info.model";
import { Character } from "./character.model";

export interface ApiResponse {
  info: ApiInfo;
  results: Character[];
}