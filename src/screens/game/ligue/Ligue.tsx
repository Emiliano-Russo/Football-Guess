import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { liguesName, Ligue } from "../../../types/Ligue";

const data: { name: Ligue; link: string }[] = [
  {
    name: "Premier Ligue",
    link: "https://www.logo.wine/a/logo/Premier_League/Premier_League-Logo.wine.svg",
  },
  {
    name: "Bundes Ligue",
    link: "https://1000marcas.net/wp-content/uploads/2020/03/logo-German-Bundesliga.png",
  },
  {
    name: "Serie A",
    link: "https://1000marcas.net/wp-content/uploads/2020/03/Italian-Serie-A-logo-1.jpg",
  },
  {
    name: "Ligue One",
    link: "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2022-02/liga-francesa-2020-2021-ds.jpg.webp?itok=eeW4hwlO",
  },
  {
    name: "La Liga",
    link: "https://assets.laliga.com/assets/public/logospage/laliga-v-16-9.jpg",
  },
];

export function LigueScreen() {
  const [selected, setSelected] = useState("Ligue One");
  const state = useSelector((state: any) => state.game);

  const dispatch = useDispatch();

  return (
    <div className="App GuessPart">
      <h2>Liga</h2>
      <div>
        {liguesName.map((ligue) => {
          return (
            <img
              style={{
                background: "white",
                margin: "10px",
                width: "100px",
                height: "60px",
                borderRadius: "10px",
                border: selected == ligue ? "3px solid red" : "1px solid black",
              }}
              onClick={() => {
                setSelected(ligue);
              }}
              src={data.find((val) => val.name == ligue)?.link}
            />
          );
        })}
      </div>
      <Button
        type="primary"
        style={{ marginTop: "50px" }}
        onClick={() => {
          dispatch(addOneAsked());
          const realLigue = state.playerToGuess.ligue;
          if (selected == realLigue) {
            message.success("Has acertado es de " + realLigue);
            dispatch(setTrueGuessedProperty("ligue"));
          } else {
            message.error("No es de la " + selected);
          }
        }}
      >
        Preguntar
      </Button>
    </div>
  );
}
