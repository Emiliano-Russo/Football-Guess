import axios from "axios";
import { JSDOM } from "jsdom";
import { PlayerPosition } from "./types";

export const heading = "data-header__headline-wrapper data-header__headline-wrapper--oswald";

async function playerList() {
  const realMadrid = "https://www.transfermarkt.es/real-madrid/startseite/verein/418";
  const psg = "https://www.transfermarkt.es/fc-paris-saint-germain/startseite/verein/583";
  const resp = await axios.get(psg);
  const dom = new JSDOM(resp.data);
  const div = dom.window.document.getElementById("yw1");
  const tbody = div?.children[1].children[1];
  let playersArr: Element[] = [];
  if (tbody?.children) playersArr = Array.from(tbody?.children);
  playersArr.forEach((val) => {
    getPlayerInfo(val);
  });
}

playerList();

function getPlayerInfo(player: Element) {
  console.log("---------------");
  const age = getAge(player);
  const name = getName(player);
  const picture = getPictureLink(player);
  const nationality = getNationality(player);
  const position = getPosition(player);
  console.log("Name: " + name);
  console.log("Age: " + age);
  console.log("Picture: " + picture);
  console.log("Nationality: " + nationality);
  console.log("Position: " + position);
}

function getPosition(player: Element) {
  const box = player.children[0];
  return classNameToPosition(box.className);
}

function classNameToPosition(className: string): PlayerPosition {
  if (className.includes("bg_Sturm")) return "Delantero";
  if (className.includes("bg_Mittelfeld")) return "Central";
  if (className.includes("bg_Abwehr")) return "Defensa";
  if (className.includes("bg_Torwart")) return "Arquero";
  console.log("found: " + className);

  throw new Error("Position Not Found");
}

function getNationality(player: Element) {
  const text = player.children[4].innerHTML;
  const indexStart = text.indexOf("title") + 7;
  const indexEnd = text.indexOf("alt") - 2;
  return text.slice(indexStart, indexEnd);
}

function getAge(player: Element): number {
  const textAge = player.children[3].innerHTML;
  const age = textAge.slice(textAge.indexOf("(") + 1, textAge.indexOf(")"));
  return parseInt(age);
}

function getName(player: Element) {
  const table = Array.from(player.children[1].getElementsByTagName("table"));
  const aArr = table[0].getElementsByTagName("a");
  const name = aArr[1].textContent;
  return name;
}

function getPictureLink(player: Element) {
  const table = Array.from(player.children[1].getElementsByTagName("table"));
  const aArr = table[0].getElementsByTagName("a");
  const indexStart = aArr[0].innerHTML.indexOf("data-src=");
  const indexEnd = aArr[0].innerHTML.indexOf("title");
  const picture = aArr[0].innerHTML.slice(indexStart + 10, indexEnd - 2);
  return picture;
}
