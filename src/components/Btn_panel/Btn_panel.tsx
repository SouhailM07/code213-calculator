import "./btn_panel.css";
// !redux
import { useSelector } from "react-redux";
// components
import { Btn } from "../../components";
//
import {
  addValue,
  resetValue,
  calcResult,
  del
} from "../Result_panel/resultPanelSlicer";

export default function Btn_panel() {

  let theme = useSelector((state: any) => state.themes.theme);

  let arrOfBtns=["7","8","9","4","5","6","+","1","2","3","-",".","0","/","*"]
  return (
    <>
      <div
        id="btn_panel"
        className={` rounded-xl h-[28rem] btnPanel-${theme}`}
      >
        {arrOfBtns.map((e,i)=>{
         return <Btn
          content={e}
          theme={`operatorBtn-${theme}`}
          action={addValue(e)}
          key={i}
          />
        })}
        
        <Btn content="DEL" action={del()} id="delBtn" theme={`functionalBtn-${theme}`} />
        <Btn
          content="RESET"
          id="resetBtn"
          action={resetValue()}
          theme={`functionalBtn-${theme}`}
        />
        <Btn
          content="="
          id="equalBtn"
          theme={`switchBtn-${theme}`}
          action={calcResult()}
        />
      </div>
    </>
  );
}
