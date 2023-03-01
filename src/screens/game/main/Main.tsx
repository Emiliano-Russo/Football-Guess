import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { GuessingData } from "../../../components/GuessingData";
import { ScreenGameNav } from "../../../components/ScreenGameNav";
import { Age } from "../age/Age";
import { Club } from "../club/Club";
import { Country } from "../country/Country";
import { Ligue } from "../ligue/Ligue";
import { Name } from "../name/Name";
import { Position } from "../position/Position";

export function Main() {
  const gameState = useSelector((state: any) => state.game);

  return (
    <div className="App">
      <h1>
        Preguntas {gameState.asked}/{gameState.totalQuestions}
      </h1>
      <ScreenGameNav />
      {/* <GuessingData /> */}
    </div>
  );
}
