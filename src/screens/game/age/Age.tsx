import { Button, Input, InputNumber } from "antd";
import React, { useState } from "react";
import { BackToGameButton } from "../../../componentes/BackToGameButton";

type ageBtn = "<" | "=" | ">";

export function Age() {
  const [age, setAge] = useState<number>(25);
  const [btnSelected, setBtnSelected] = useState<ageBtn>("=");

  return (
    <div className="App">
      <BackToGameButton />
      <h1>Edad</h1>
      <div>
        <h2>Tiene</h2>
        <div>
          <Button
            style={{
              background: btnSelected == "<" ? "yellow" : "white",
              border: "none",
            }}
            onClick={() => {
              setBtnSelected("<");
            }}
          >
            Menos de
          </Button>
          <Button
            style={{ background: btnSelected == "=" ? "yellow" : "white", border: "none" }}
            onClick={() => {
              setBtnSelected("=");
            }}
          >
            Exactamente
          </Button>
          <Button
            style={{ background: btnSelected == ">" ? "yellow" : "white", border: "none" }}
            onClick={() => {
              setBtnSelected(">");
            }}
          >
            Mas de
          </Button>
        </div>
        <InputNumber
          type={"number"}
          value={age}
          onChange={(n) => {
            if (n && n >= 15 && n && n <= 50) {
              setAge(n);
            }
          }}
          style={{ width: "80px" }}
        />
        <br></br>
        <Button type="primary" style={{ marginTop: "40px" }}>
          Preguntar
        </Button>
      </div>
    </div>
  );
}
