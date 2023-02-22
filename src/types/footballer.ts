import { Ligue } from "./Ligue";
import { PlayerPosition } from "./Position";

export interface Footballer {
  name: string;
  age: number;
  country: string;
  ligue: Ligue;
  club: string;
  position: PlayerPosition;
  pictureLink?: string;
}

export type FootballerAttributes = "name" | "age" | "country" | "ligue" | "club" | "position";
