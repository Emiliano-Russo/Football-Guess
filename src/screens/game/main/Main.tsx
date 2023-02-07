import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Main() {
  const nav = useNavigate();

  return (
    <div className="App">
      <h1>Pregunta por...</h1>
      <div
        id="boxes"
        style={{ display: "flex", flexDirection: "row", margin: "0 auto", maxWidth: "fit-content" }}
      >
        <div id="1" className="miniBox">
          <Button
            onClick={() => {
              nav("/game/ligue");
            }}
          >
            Liga
          </Button>
          <Button>Continente</Button>
          <Button>Edad</Button>
        </div>
        <div id="2" className="miniBox">
          <Button disabled></Button>
          <Button>Nombre</Button>
          <Button disabled></Button>
        </div>
        <div id="3" className="miniBox">
          <Button>País</Button>
          <Button>Club</Button>
          <Button>Posición</Button>
        </div>
      </div>
    </div>
  );
}
