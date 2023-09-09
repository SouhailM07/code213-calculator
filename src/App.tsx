import "./style/input.css";
import "./App.css";
// components
import { Control_panel, Result_panel, Btn_panel } from "./components";
// hooks
import { useState } from "react";
//
let body = document.body as HTMLBodyElement;
function App() {
  let [counter, setCounter] = useState(1);
  body.className = `bodyColor-${counter}`;
  return (
    <>
      <div className="border-2 m-auto border-red-500 w-[40rem] flex flex-col justify-between h-[48rem]">
        <Control_panel theme={counter} />
        <Result_panel theme={counter} />
        <Btn_panel
          theme={counter}
          send={() => {
            setCounter(++counter);
          }}
        />
      </div>
    </>
  );
}
export default App;
