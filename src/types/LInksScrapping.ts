import { Ligue } from "./Ligue";
interface LigueScrapping {
  league: Ligue;
  clubLinks: string[];
}

export const soccer_leagues_name_search_for_web_scrapping: LigueScrapping[] = [
  {
    league: "Premier Ligue",
    clubLinks: [
      "https://www.transfermarkt.es/manchester-united/startseite/verein/985",
      "https://www.transfermarkt.es/aston-villa/startseite/verein/405",
      "https://www.transfermarkt.es/manchester-city/startseite/verein/281",
    ],
  },
  {
    league: "Bundes Ligue",
    clubLinks: [
      "https://www.transfermarkt.es/fc-bayern-munchen/startseite/verein/27",
      "https://www.transfermarkt.es/borussia-dortmund/startseite/verein/16",
      "https://www.transfermarkt.es/rasenballsport-leipzig/startseite/verein/23826",
    ],
  },
  {
    league: "La Liga",
    clubLinks: [
      "https://www.transfermarkt.es/real-madrid/startseite/verein/418",
      "https://www.transfermarkt.es/fc-barcelona/startseite/verein/131",
      "https://www.transfermarkt.es/real-betis-sevilla/startseite/verein/150",
    ],
  },
];
