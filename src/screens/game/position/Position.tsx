import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { PlayerPosition } from "../../../types/Position";

export function Position() {
  const [position, setPosition] = useState<PlayerPosition>("Defensa");

  const state = useSelector((state: any) => state.game);
  const dispatch = useDispatch();

  return (
    <div className="App GuessPart">
      <h2>Posicion</h2>
      <div>
        <Button
          style={{
            background: position == "Arquero" ? "yellow" : "white",
            border: "none",
          }}
          onClick={() => {
            setPosition("Arquero");
          }}
        >
          Arquero
        </Button>
        <Button
          style={{
            background: position == "Defensa" ? "yellow" : "white",
            border: "none",
          }}
          onClick={() => {
            setPosition("Defensa");
          }}
        >
          Defensa
        </Button>
        <Button
          style={{
            background: position == "Central" ? "yellow" : "white",
            border: "none",
          }}
          onClick={() => {
            setPosition("Central");
          }}
        >
          Central
        </Button>
        <Button
          style={{
            background: position == "Delantero" ? "yellow" : "white",
            border: "none",
          }}
          onClick={() => {
            setPosition("Delantero");
          }}
        >
          Delantero
        </Button>
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
