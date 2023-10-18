import "./control_panel.css";
// !redux
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlicer";
//
import switchSound from "../../sounds/switchSound.wav";

export default function Control_panel() {
  // !redux
  let theme = useSelector((state: any) => state.themes.theme);
  let dispatch = useDispatch();
  // audio element
  let audioElement = document.createElement("audio");
  audioElement.src = switchSound;
  return (
    <div
      id="control-panel"
      className=" flex justify-between items-center h-[4.2rem] mb-6"
    >
      <h2 className={`text-${theme} text-[2.3rem] pt-2 `}>calc</h2>
      <div
        id="control-panel__theme"
        className="flex  w-[9.7rem]  justify-between "
      >
        <h3 className={`text-${theme}  self-end `}>THEME</h3>
        <div className="flex flex-col items-center">
          <div
            className={`flex justify-between text-[1rem] w-[3.7rem] text-${theme}`}
          >
            <span className=" inline-block">1</span>
            <span className=" inline-block">2</span>
            <span className=" inline-block">3</span>
          </div>
          <div
            onClick={() => {
              audioElement.play();
              dispatch(toggleTheme());
            }}
            className={`btnPanel-${theme} toggleBtn-${theme} h-[1.8rem] w-[4.8rem] rounded-full flex 
            items-center px-[0.4rem] hover:cursor-pointer`}
          >
            <div
              id="toggle_btn"
              className={`switchBtn-${theme} w-[1rem] h-[1rem] rounded-full`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
