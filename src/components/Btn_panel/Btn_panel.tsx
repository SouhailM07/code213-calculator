import "./btn_panel.css";
// components
import { Btn } from "../../components";
export default function Btn_panel(props) {
  return (
    <>
      <div
        id="btn_panel"
        className={` rounded-xl h-[30rem]   btnPanel-${props.theme}`}
      >
        <Btn
          content="7"
          action={props.send}
          theme={`operatorBtn-${props.theme}`}
        />
        <Btn content="8" theme={`operatorBtn-${props.theme}`} />
        <Btn content="9" theme={`operatorBtn-${props.theme}`} />
        <Btn content="DEL" id="delBtn" theme={`functionalBtn-${props.theme}`} />
        <Btn content="4" theme={`operatorBtn-${props.theme}`} />
        <Btn content="5" theme={`operatorBtn-${props.theme}`} />
        <Btn content="6" theme={`operatorBtn-${props.theme}`} />
        <Btn content="+" theme={`operatorBtn-${props.theme}`} />
        <Btn content="1" theme={`operatorBtn-${props.theme}`} />
        <Btn content="2" theme={`operatorBtn-${props.theme}`} />
        <Btn content="3" theme={`operatorBtn-${props.theme}`} />
        <Btn content="-" theme={`operatorBtn-${props.theme}`} />
        <Btn content="." theme={`operatorBtn-${props.theme}`} />
        <Btn content="0" theme={`operatorBtn-${props.theme}`} />
        <Btn content="/" theme={`operatorBtn-${props.theme}`} />
        <Btn content="x" theme={`operatorBtn-${props.theme}`} />
        <Btn
          content="RESET"
          id="resetBtn"
          theme={`functionalBtn-${props.theme}`}
        />
        <Btn content="=" id="equalBtn" theme={`switchBtn-${props.theme}`} />
      </div>
    </>
  );
}
