import "./control_panel.css";
export default function Control_panel({ theme, toggle }) {
  return (
    <div
      id="control-panel"
      className=" flex justify-between items-center h-[4.2rem] "
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
              toggle();
            }}
            className={`btnPanel-${theme} toggleBtn-${theme} h-[1.8rem] w-[4.8rem] rounded-full flex 
            items-center px-[0.4rem] hover:cursor-pointer`}
          >
            <div
              id="toggle_btn"
              className={`switchBtn-${theme}  w-[1rem] h-[1rem] rounded-full`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
