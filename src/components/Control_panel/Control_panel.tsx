import "./control_panel.css";
export default function Control_panel() {
  return (
    <div
      id="control-panel"
      className="border-2 border-black flex justify-between items-center h-[6rem]"
    >
      <h2>calc</h2>
      <div id="control-panel__theme" className="flex">
        <h3 className="self-end">THEME</h3>
        <div className="flex flex-col items-center">
          <div className="flex justify-between text-[1.2rem] w-[3.9rem]">
            <span className=" bg-yellow-500 inline-block">1</span>
            <span className=" bg-yellow-500 inline-block">2</span>
            <span className=" bg-yellow-500 inline-block">3</span>
          </div>
          <div className="bg-black h-[1.6rem] w-[4.5rem] rounded-full flex items-center p-1">
            <div className="bg-red-600 w-[1rem] h-[1rem] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
