import { configureStore } from "@reduxjs/toolkit";
import resultPanelSlicer from "./components/Result_panel/resultPanelSlicer";
import themeSlicer from "./components/Control_panel/themeSlicer";

const store = configureStore({
  reducer: {
    resultSlicer: resultPanelSlicer,
    themes: themeSlicer,
  },
});

export default store;
