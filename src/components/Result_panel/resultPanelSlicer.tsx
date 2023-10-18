import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  result: ["0"],
  lastItemsForbidden: ["/", "*", "+", "-"],
};

let resultPanelSlicer = createSlice({
  name: "result",
  initialState,
  reducers: {
    addValue: (state: any, action) => {
      if (state.result[0] == "0") {
        state.result = [];
      }
      // includes + / - * [save guard]
      if (state.result.includes("Error")) state.result = [""];
      else if (
        state.lastItemsForbidden.includes(
          state.result[state.result.length - 1]
        ) &&
        state.lastItemsForbidden.includes(action.payload)
      ) {
        state.result.pop();
      }
      state.result.push(action.payload);
    },
    calcResult: (state) => {
      if (
        state.lastItemsForbidden.includes(state.result[state.result.length - 1])
      ) {
        state.result.pop();
      }
      try {
        state.result = [eval(state.result.join(""))];
      } catch (err) {
        state.result = ["Error"];
      }
    },
    resetValue: (state) => {
      state.result = ["0"];
    },
    del: (state) => {
      state.result.pop();
      if (state.result.length == 0) {
        state.result = ["0"];
      }
    },
  },
});

export let { addValue, calcResult, resetValue, del } =
  resultPanelSlicer.actions;
export default resultPanelSlicer.reducer;
