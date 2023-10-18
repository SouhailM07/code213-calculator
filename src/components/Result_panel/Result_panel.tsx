import "./result_panel.css";
// ! redux
import { useSelector } from "react-redux";

export default function Result_panel() {
  let result = useSelector((state: any) => state.resultSlicer.result);
  let theme = useSelector((state: any) => state.themes.theme);
  return (
    <>
      <div
        id="result_panel"
        className={`mb-8 pr-8 h-[8rem] rounded-lg flex justify-end items-center text-[4rem] resultPanel-${theme} text-${theme}`}
      >
        {result}
      </div>
    </>
  );
}
