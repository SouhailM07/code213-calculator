import "./style/input.css";
import "./App.css";
// components
import { Control_panel, Result_panel, Btn_panel } from "./components";
// !redux
import { useSelector } from "react-redux";
//
let body = document.body as HTMLBodyElement;

function App() {
  let theme = useSelector((state: any) => state.themes.theme);
  //
  body.className = `bodyColor-${theme}`;
  return (
    <>
      <div id="container" className=" w-[38rem] flex flex-col justify-between ">
        <Control_panel />
        <Result_panel />
        <Btn_panel />
      </div>
    </>
  );
}
export default App;
