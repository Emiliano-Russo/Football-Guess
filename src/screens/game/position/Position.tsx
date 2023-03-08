import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { getStyles } from "../../../global_styles/ButtonSelection.css";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { PlayerPosition, playerPositionToString } from "../../../types/Position";

export function Position() {
  const [position, setPosition] = useState<PlayerPosition>("Defensa");

  const state = useSelector((state: any) => state.game);
  const dispatch = useDispatch();

  return (
    <div className="App GuessPart">
      <h2>Posición</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {playerPositionToString.map((val) => (
          <Button
            style={getStyles(position == val)}
            onClick={() => {
              setPosition(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <Button
        type="primary"
        style={{ marginTop: "50px" }}
        onClick={() => {
          dispatch(addOneAsked());
          const realPosition = state.playerToGuess.position;
          if (realPosition == position) {
            message.success("Has acertado tu jugador es " + realPosition);
            dispatch(setTrueGuessedProperty("position"));
          } else {
            message.error("Tu jugador no es " + position);
          }
        }}
      >
        Preguntar
      </Button>
    </div>
  );
}
