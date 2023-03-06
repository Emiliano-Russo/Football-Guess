import { Button, Input, InputNumber, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { getStyles } from "../../../global_styles/ButtonSelection.css";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { isSameAge } from "./logic";

type ageBtn = "<" | "=" | ">";
const btns: { char: ageBtn; value: string }[] = [
  { char: "<", value: "Menos de" },
  { char: "=", value: "Igual" },
  { char: ">", value: "Mas de" },
];

export function Age() {
  const [age, setAge] = useState<number>(25);
  const [btnSelected, setBtnSelected] = useState<ageBtn>("=");

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.game);

  return (
    <div className="App GuessPart">
      <h2>Edad</h2>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {btns.map((val) => {
            return (
              <Button
                style={getStyles(btnSelected == val.char)}
                onClick={() => {
                  setBtnSelected(val.char);
                }}
              >
                {val.value}
              </Button>
            );
          })}
        </div>
        <InputNumber
          type={"number"}
          value={age}
          onChange={(n) => {
            if (n && n >= 15 && n && n <= 50) {
              setAge(n);
            }
          }}
          style={{ width: "150px", marginTop: "30px" }}
        />
        <br></br>
        <Button
          type="primary"
          style={{ marginTop: "10px", width: "150px" }}
          onClick={() => {
            dispatch(addOneAsked());
            const realAge = state.playerToGuess.age;
            const result: boolean = isSameAge({ btnSelected, realAge, age, message });
            if (result) dispatch(setTrueGuessedProperty("age"));
          }}
        >
          Preguntar
        </Button>
      </div>
    </div>
  );
}
