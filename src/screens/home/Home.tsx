import { Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Ligue, Player } from "../../data/types";
//import { getAllPlayers, mock_getRandomPlayer } from "../../data";
import { startGame } from "../../redux/gameSlice";

export function Home() {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const start = async () => {
    setLoading(true);
    dispatch(startGame());
    const soccerPlayer: Player = getRandomePlayer;
    nav("/game");
  };

  const getRandomePlayer: Player = {
    age: 35,
    club: "Paris Saint Germain",
    country: "Argentina",
    ligue: Ligue["Ligue One"],
    name: "Lionel Messi",
    picture: "",
    position: "Delantero",
  };

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
        <Button loading={loading} type="primary" onClick={start}>
          Empezar
        </Button>
        <Button loading={loading}>Reglas</Button>
      </div>
    </div>
  );
}
