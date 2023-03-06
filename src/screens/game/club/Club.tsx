import React, { useEffect, useState } from "react";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";

export function Club() {
  const [loading, setLoading] = useState(false);
  const [clubsNames, setClubsNames] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    getClubs()
      .then((value) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function getClubs() {}

  return (
    <div className="App GuessPart">
      <h2>Club</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <SuggestorInput
          options={clubsNames.map((club) => {
            return { value: club };
          })}
          select={function (name: string): void {
            console.log("selected!", name);
          }}
        />
      )}
    </div>
  );
}
