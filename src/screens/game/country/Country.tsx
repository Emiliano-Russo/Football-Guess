import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";
import { addOneAsked, setTrueGuessedProperty } from "../../../redux/gameSlice";
import { country_list } from "../../../types/Countries";

export function Country() {
  const state = useSelector((state: any) => state.game);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BackToGameButton />
      <h1>Pais</h1>
      <SuggestorInput
        options={country_list()}
        select={(name: string) => {
          dispatch(addOneAsked());
          const realCountry: string = state.playerToGuess.country;
          if (realCountry.toLocaleLowerCase() == name.toLocaleLowerCase()) {
            message.success("Si tu jugador es de " + realCountry);
            dispatch(setTrueGuessedProperty("country"));
          } else {
            message.error("Tu jugador no es de " + name);
          }
        }}
      />
    </div>
  );
}
