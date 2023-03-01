import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GuessingData } from "../../../components/GuessingData";
import { ScreenGameNav } from "../../../components/ScreenGameNav";

export function Main() {
  const gameState = useSelector((state: any) => state.game);

  return (
    <div className="App">
      <h1>
        Preguntas {gameState.asked}/{gameState.totalQuestions}
      </h1>
      <ScreenGameNav />
      <GuessingData />
    </div>
  );
}
