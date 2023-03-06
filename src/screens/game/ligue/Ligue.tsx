import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { liguesName } from "../../../types/Ligue";

export function Ligue() {
  const [selected, setSelected] = useState("Ligue One");
  const state = useSelector((state: any) => state.game);

  const dispatch = useDispatch();

  return (
    <div className="App GuessPart">
      <h2>Liga</h2>
      <div>
        {liguesName.map((ligue) => {
          return (
            <Button
              style={{ background: selected == ligue ? "yellow" : "white", border: "none" }}
              onClick={() => {
                setSelected(ligue);
              }}
            >
              {ligue}
            </Button>
          );
        })}
      </div>
      <Button
        type="primary"
        style={{ marginTop: "50px" }}
        onClick={() => {
          dispatch(addOneAsked());
          const realLigue = state.playerToGuess.ligue;
          if (selected == realLigue) {
            message.success("Has acertado es de " + realLigue);
            dispatch(setTrueGuessedProperty("ligue"));
          } else {
            message.error("No es de la " + selected);
          }
        }}
      >
        Preguntar
      </Button>
    </div>
  );
}
