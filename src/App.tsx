import "./style/input.css";
import "./App.css";
// components
import { Control_panel, Result_panel, Btn_panel } from "./components";
// hooks
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(1);
  return (
    <>
      <div className="border-2 m-auto border-red-500 w-[43rem] h-[40rem]">
        <Control_panel />
        <Result_panel />
        <Btn_panel
          send={() => {
            setCounter(++counter);
          }}
        />
      </div>
    </>
  );
}
export default App;
