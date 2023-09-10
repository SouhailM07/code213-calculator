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
  let [direction, setDirection] = useState(false);
  body.className = `bodyColor-${counter}`;
  return (
    <>
      <div className=" w-[40rem] flex flex-col justify-between h-[46.5rem]">
        <Control_panel
          theme={counter}
          toggle={() => {
            if (counter == 1 && !direction) setCounter(++counter);
            else if (counter == 2 && !direction) setCounter(++counter);
            else if (counter == 3 && !direction) {
              setCounter(--counter);
              setDirection(!direction);
            } else if (counter === 2 && direction) setCounter(--counter);
            else if (counter === 1 && direction) {
              setCounter(++counter);
              setDirection(!direction);
            }
          }}
        />
        <Result_panel theme={counter} />
        <Btn_panel theme={counter} />
      </div>
    </>
  );
}
export default App;
