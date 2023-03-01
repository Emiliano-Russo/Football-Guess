import { useSelector } from "react-redux";

export function GuessingData() {
  const gameState = useSelector((state: any) => state.game);

  return (
    <div
      style={{
        background: "linear-gradient(0deg, rgba(109,225,255,1) 0%, rgba(22,119,255,1) 100%)",
        width: "290px",
        margin: "20px auto",
        padding: "5px 15px",
        borderRadius: "10px",
      }}
    >
      <h2>Información</h2>
      <p>
        <strong>Pais: </strong>
        {gameState.guessedData.country ? gameState.playerToGuess.country : "?"}
      </p>
      <p>
        <strong>Edad: </strong> {gameState.guessedData.age ? gameState.playerToGuess.age : "?"}
      </p>
      <p>
        <strong>Nombre: </strong>
        {gameState.guessedData.name ? gameState.playerToGuess.name : "?"}
      </p>
      <p>
        <strong>Liga: </strong>
        {gameState.guessedData.ligue ? gameState.playerToGuess.ligue : "?"}
      </p>
      <p>
        <strong>Club: </strong>
        {gameState.guessedData.club ? gameState.playerToGuess.club : "?"}
      </p>
      <p>
        <strong>Posición: </strong>
        {gameState.guessedData.position ? gameState.playerToGuess.position : "?"}
      </p>
    </div>
  );
}
