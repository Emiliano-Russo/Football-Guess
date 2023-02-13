import { Button } from "antd";
import React, { useState } from "react";
import { BackToGameButton } from "../../../components/BackToGameButton";

type Position = "Arquero" | "Defensa" | "Central" | "Delantero";

export function Position() {
  const [position, setPosition] = useState<Position>("Defensa");

  return (
    <div className="App">
      <BackToGameButton />
      <h1>Posicion</h1>
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
      <Button type="primary" style={{ marginTop: "50px" }}>
        Preguntar
      </Button>
    </div>
  );
}
