import React from "react";
import { BackToGameButton } from "../../../componentes/BackToGameButton";
import { SuggestorInput } from "../../../componentes/SuggestorInput";

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
    <div className="App">
      <BackToGameButton />
      <h1>Name Screen!</h1>
      <SuggestorInput options={players} select={(name: string) => console.log("SELECTED!", name)} />
    </div>
  );
}
