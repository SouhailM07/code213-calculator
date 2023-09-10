import "./result_panel.css";
export default function Result_panel(props) {
  return (
    <>
      <div
        id="result_panel"
        className={`mb-8 pr-8 h-[9rem] rounded-lg flex justify-end items-center text-[4rem] resultPanel-${props.theme} text-${props.theme}`}
      >
        399,981
      </div>
    </>
  );
}
