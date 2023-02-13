import { BackToGameButton } from "../../../components/BackToGameButton";
import { SuggestorInput } from "../../../components/SuggestorInput";

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
      <h1>Pais</h1>
      <SuggestorInput
        options={countries}
        select={(name: string) => console.log("SELECTED!", name)}
      />
    </div>
  );
}
