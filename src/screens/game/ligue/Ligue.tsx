import { Button } from "antd";
import React, { useState } from "react";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { liguesName } from "../../../types/Ligue";

export function Ligue() {
  const [selected, setSelected] = useState("Ligue One");

  return (
    <div className="App" style={{}}>
      <BackToGameButton />
      <h1>Liga</h1>
      <div>
        {liguesName.map((ligue) => {
          return (
            <Button
              style={{ background: selected == ligue ? "yellow" : "white", border: "none" }}
              onClick={() => {
                setSelected(ligue);
              }}
            >
              {ligue}
            </Button>
          );
        })}
      </div>
      <Button type="primary" style={{ marginTop: "50px" }}>
        Preguntar
      </Button>
    </div>
  );
}
