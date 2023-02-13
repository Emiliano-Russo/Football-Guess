import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Main() {
  const nav = useNavigate();
  const gameState = useSelector((state: any) => state.game);

  return (
    <div className="App">
      <h3>
        Preguntas {gameState.asked}/{gameState.totalQuestions}
      </h3>
      <div
        id="boxes"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          maxWidth: "fit-content",
        }}
      >
        <div className="miniBox">
          <Button
            onClick={() => {
              nav("/game/country");
            }}
          >
            País
          </Button>
          <Button
            onClick={() => {
              nav("/game/age");
            }}
          >
            Edad
          </Button>
          <Button
            onClick={() => {
              nav("/game/name");
            }}
          >
            Nombre
          </Button>
        </div>
        <div className="miniBox">
          <Button
            onClick={() => {
              nav("/game/ligue");
            }}
          >
            Liga
          </Button>
          <Button
            onClick={() => {
              nav("/game/club");
            }}
          >
            Club
          </Button>
          <Button
            onClick={() => {
              nav("/game/position");
            }}
          >
            Posición
          </Button>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(109,225,255,1) 0%, rgba(22,119,255,1) 100%)",
          width: "290px",
          margin: "20px auto",
          padding: "5px 15px",
          borderRadius: "10px",
        }}
      >
        <h2>Información</h2>
        <p>
          <strong>Pais: </strong>
          {gameState.guessedData.country ? gameState.playerToGuess.country : "?"}
        </p>
        <p>
          <strong>Edad: </strong> {gameState.guessedData.age ? gameState.playerToGuess.age : "?"}
        </p>
        <p>
          <strong>Nombre: </strong>
          {gameState.guessedData.name ? gameState.playerToGuess.name : "?"}
        </p>
        <p>
          <strong>Liga: </strong>
          {gameState.guessedData.ligue ? gameState.playerToGuess.ligue : "?"}
        </p>
        <p>
          <strong>Club: </strong>
          {gameState.guessedData.club ? gameState.playerToGuess.club : "?"}
        </p>
        <p>
          <strong>Posición: </strong>
          {gameState.guessedData.position ? gameState.playerToGuess.position : "?"}
        </p>
      </div>
    </div>
  );
}
