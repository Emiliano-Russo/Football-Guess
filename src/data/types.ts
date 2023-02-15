export enum Ligue {
  "Premier Ligue" = 0,
  "Bundes Ligue" = 1,
  "Ligue One" = 2,
  "Serie A" = 3,
  "La Liga" = 4,
}

export type PlayerPosition = "Arquero" | "Defensa" | "Central" | "Delantero";

export interface Player {
  name: string;
  position: PlayerPosition;
  birth: Date;
  club: string;
  country: string;
  ligue: Ligue;
}
