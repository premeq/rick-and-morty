import { Info, Location, Episode, Character } from "@/types/typesGraphApi";

export interface LocationsDataQuery {
  locations: {
    info: Info;
    results: LocationsResult[];
  };
}

export type LocationsResult = Pick<
  Location,
  "__typename" | "id" | "name" | "type"
>;

export interface EpisodesDataQuery {
  episodes: {
    info: Info;
    results: EpisodesResult[];
  };
}

export type EpisodesResult = Pick<
  Episode,
  "__typename" | "id" | "name" | "air_date" | "episode"
>;

export interface CharactersDataQuery {
  characters: {
    info: Info;
    results: CharactersResult[];
  };
}

export type CharactersResult = Pick<
  Character,
  "__typename" | "id" | "name" | "status" | "species" | "image"
>;
