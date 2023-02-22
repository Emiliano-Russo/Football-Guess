import { Button, Input, InputNumber, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";

type ageBtn = "<" | "=" | ">";

export function Age() {
  const [age, setAge] = useState<number>(25);
  const [btnSelected, setBtnSelected] = useState<ageBtn>("=");

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.game);

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
        <Button
          type="primary"
          style={{ marginTop: "40px" }}
          onClick={() => {
            dispatch(addOneAsked());
            const realAge = state.playerToGuess.age;
            switch (btnSelected) {
              case "=":
                if (realAge == age) {
                  dispatch(setTrueGuessedProperty("age"));
                  message.success("Has acertado tu jugador tiene " + age + "!");
                } else {
                  message.error("Tu jugador no tiene " + age);
                }
                break;
              case "<":
                if (realAge < age) {
                  message.success("Si tu jugador tiene menos de " + age);
                } else {
                  message.error("Tu jugador no tiene menos de " + age);
                }
                break;

              case ">":
                if (realAge > age) {
                  message.success("Si tu jugador tiene mas de " + age);
                } else {
                  message.error("Tu jugador no tiene mas de " + age);
                }
                break;
            }
          }}
        >
          Preguntar
        </Button>
      </div>
    </div>
  );
}
