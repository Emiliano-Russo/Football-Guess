import React from "react";
import { BackToGameButton } from "../../../componentes/BackToGameButton";
import { SuggestorInput } from "../../../componentes/SuggestorInput";

const clubs = [
  { value: "Arsenal" },
  { value: "Manchester City" },
  { value: "Manchester United" },
  { value: "Barcelona" },
  { value: "Real Madrid" },
  { value: "Paris Saint Germain" },
  { value: "Valencia" },
  { value: "Chelsea" },
];

export function Club() {
  return (
    <div className="App">
      <BackToGameButton />
      <h1>Club</h1>
      <SuggestorInput
        options={clubs}
        select={function (name: string): void {
          console.log("selected!", name);
        }}
      />
    </div>
  );
}
