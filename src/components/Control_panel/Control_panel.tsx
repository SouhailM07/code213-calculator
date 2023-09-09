import "./control_panel.css";
export default function Control_panel() {
  return (
    <div
      id="control-panel"
      className="border-2 border-black flex justify-between items-center h-[6rem]"
    >
      <h2>calc</h2>
      <div
        id="control-panel__theme"
        className="flex border-2 border-red-500 w-[10rem]  justify-between "
      >
        <h3>THEME</h3>
        <div className="flex flex-col items-center">
          <div className="flex justify-between text-[1.2rem] w-[3.7rem]">
            <span className=" bg-yellow-500 inline-block">1</span>
            <span className=" bg-yellow-500 inline-block">2</span>
            <span className=" bg-yellow-500 inline-block">3</span>
          </div>
          <div className="bg-black h-[1.6rem] w-[4.8rem] rounded-full flex items-center px-[0.4rem]">
            <div className="bg-red-600 w-[1.1rem] h-[1.1rem] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
