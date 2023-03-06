import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
  name: "screenSlice",
  initialState: {
    actualNav: "/game",
  },
  reducers: {
    setActualNav: (state, action: PayloadAction<string>) => {
      console.log("changing actual nav: " + action.payload);
      state.actualNav = action.payload;
    },
  },
});

export const { setActualNav } = screenSlice.actions;

export default screenSlice.reducer;
