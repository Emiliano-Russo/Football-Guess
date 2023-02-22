import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";
import { country_list } from "../../../types/Countries";

export function Country() {
  return (
    <div className="App">
      <BackToGameButton />
      <h1>Pais</h1>
      <SuggestorInput
        options={country_list()}
        select={(name: string) => console.log("SELECTED!", name)}
      />
    </div>
  );
}
