import { BackToGameButton } from "../../../componentes/BackToGameButton";
import { SuggestorInput } from "../../../componentes/SuggestorInput";

const countries = [
  { value: "Argentina" },
  { value: "Brasil" },
  { value: "Ecuador" },
  { value: "España" },
  { value: "Portugal" },
  { value: "Francia" },
  { value: "Alemania" },
  { value: "Uruguay" },
];

export function Country() {
  return (
    <div className="App">
      <BackToGameButton />
      <h1>Country Screen!</h1>
      <SuggestorInput
        options={countries}
        select={(name: string) => console.log("SELECTED!", name)}
      />
    </div>
  );
}
