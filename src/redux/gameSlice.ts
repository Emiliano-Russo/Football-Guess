import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Footballer, FootballerAttributes } from "../types/Footballer";
import { Ligue } from "../types/Ligue";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPlaying: false,
    totalQuestions: 10,
    asked: 0,
    playerToGuess: {
      name: "",
      age: -1,
      country: "",
      ligue: "Premier Lig",
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
    setTotalQuestions: (state, action: PayloadAction<number>) => {
      state.totalQuestions = action.payload;
    },
    setAsked: (state, action: PayloadAction<number>) => {
      state.asked = action.payload;
    },
    addOneAsked: (state) => {
      state.asked += 1;
    },
  },
});

export const {
  startGame,
  endGame,
  setPlayerToGuess,
  setTrueGuessedProperty,
  setFalseGuessedProperty,
  setTotalQuestions,
  setAsked,
  addOneAsked,
} = gameSlice.actions;

export default gameSlice.reducer;
