interface OriginAndLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginAndLocation;
  location: OriginAndLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}