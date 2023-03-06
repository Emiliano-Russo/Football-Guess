import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./screenSlice";
import gameSlice from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    screenSlice: screenSlice,
  },
});
