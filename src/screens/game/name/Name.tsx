import React from "react";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";

const players = [
  { value: "Messi" },
  { value: "Cristiano Ronaldo" },
  { value: "Haland" },
  { value: "Salah" },
  { value: "Parejo" },
  { value: "Mbappe" },
  { value: "Rudiger" },
  { value: "Modric" },
  { value: "Sergio Ramos" },
  { value: "Pedri" },
];

export function Name() {
  return (
    <div className="App GuessPart">
      <h2>Nombre</h2>
      <SuggestorInput options={players} select={(name: string) => console.log("SELECTED!", name)} />
    </div>
  );
}
