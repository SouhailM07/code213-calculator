import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  theme: 1,
  direction: true,
};

let themeSlicer = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme == 1 && !state.direction) ++state.theme;
      else if (state.theme == 2 && !state.direction) ++state.theme;
      else if (state.theme == 3 && !state.direction) {
        // setCounter(--counter);
        --state.theme;
        state.direction = !state.direction;
        // setDirection(!direction);
      } else if (state.theme === 2 && state.direction) --state.theme;
      else if (state.theme === 1 && state.direction) {
        // setCounter(++counter);
        ++state.theme;
        state.direction = !state.direction;
        // setDirection(!direction);
      }
    },
  },
});

export let { toggleTheme } = themeSlicer.actions;
export default themeSlicer.reducer;
