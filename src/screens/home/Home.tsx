import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGame } from "../../redux/gameSlice";

export function Home() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Adivina el Jugador ⚽</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            //dispatch(startGame());
            nav("/game");
          }}
        >
          Empezar
        </Button>
        <Button>Opciones</Button>
      </div>
    </div>
  );
}
