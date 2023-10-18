// style
import "./btn.css";
// !redux
import { useDispatch } from "react-redux";
// hooks
import { useRef } from "react";
// audio sound effect for btns
import audioEffect from "../../sounds/btnClickedSound.wav";
//
export default function Btn({ action, content, id, theme }) {
  let btnRef: any = useRef("");
  //
  let dispatch = useDispatch();
  // configuring the audio element
  let audioElement = document.createElement("audio") as HTMLAudioElement;
  audioElement.src = audioEffect;
  return (
    <>
      <button
        id={id}
        ref={btnRef}
        onClick={() => {
          audioElement.play();
          btnRef.current.classList.add("scale-up-center");
          dispatch(action);
          setTimeout(() => {
            btnRef.current.classList.remove("scale-up-center");
          }, 220);
        }}
        className={`btn font-bold m-3 h-[3.8rem] w-[6.6rem] rounded-xl text-[2.2rem] ${theme}`}
      >
        {content}
      </button>
    </>
  );
}
