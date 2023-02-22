import { Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGame } from "../../redux/gameSlice";
import { Footballer } from "../../types/Footballer";

export function Home() {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const start = async () => {
    setLoading(true);
    dispatch(startGame());
    const soccerPlayer: Footballer = getRandomePlayer;
    nav("/game");
  };

  const getRandomePlayer: Footballer = {
    age: 35,
    club: "Paris Saint Germain",
    country: "Argentina",
    ligue: "Ligue One",
    name: "Lionel Messi",
    position: "Delantero",
    pictureLink: "",
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
