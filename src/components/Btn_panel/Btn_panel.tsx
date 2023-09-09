import "./btn_panel.css";
// components
import { Btn } from "../../components";
export default function Btn_panel(props) {
  return (
    <>
      <div
        id="btn_panel"
        className="border-2 border-black flex flex-wrap justify-evenly "
      >
        <Btn content="7" action={props.send} />
        <Btn content="8" />
        <Btn content="9" />
        <Btn content="DEL" id="delBtn" />
        <Btn content="4" />
        <Btn content="5" />
        <Btn content="6" />
        <Btn content="+" />
        <Btn content="1" />
        <Btn content="2" />
        <Btn content="3" />
        <Btn content="-" />
        <Btn content="." />
        <Btn content="0" />
        <Btn content="/" />
        <Btn content="x" />
        <Btn content="RESET" id="resetBtn" />
        <Btn content="=" id="equalBtn" />
      </div>
    </>
  );
}
