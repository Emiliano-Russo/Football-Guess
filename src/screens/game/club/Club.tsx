import React from "react";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";
import { clubs } from "../../../data/constants";

export function Club() {
  return (
    <div className="App">
      <BackToGameButton />
      <h1>Club</h1>
      <SuggestorInput
        options={clubs([]).map((club) => {
          return { value: club };
        })}
        select={function (name: string): void {
          console.log("selected!", name);
        }}
      />
    </div>
  );
}
