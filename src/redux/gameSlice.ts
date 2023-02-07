import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Footballer, FootballerAttributes } from "../types/footballer";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPlaying: false,
    playerToGuess: {
      name: "",
      age: "",
      country: "",
      ligue: "",
      club: "",
      position: "",
    },
    guessedData: {
      name: false,
      age: false,
      country: false,
      ligue: false,
      club: false,
      position: false,
    },
  },
  reducers: {
    startGame: (state) => {
      state.isPlaying = true;
    },
    endGame: (state) => {
      state.isPlaying = false;
    },
    setPlayerToGuess: (state, action: PayloadAction<Footballer>) => {
      state.playerToGuess = action.payload;
    },
    setTrueGuessedProperty: (state, action: PayloadAction<FootballerAttributes>) => {
      state.guessedData[action.payload] = true;
    },
    setFalseGuessedProperty: (state, action: PayloadAction<FootballerAttributes>) => {
      state.guessedData[action.payload] = false;
    },
  },
});

export const {
  startGame,
  endGame,
  setPlayerToGuess,
  setTrueGuessedProperty,
  setFalseGuessedProperty,
} = gameSlice.actions;

export default gameSlice.reducer;
