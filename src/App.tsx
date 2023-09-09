import "./style/input.css";
import "./App.css";
// components
import { Control_panel } from "./components";
function App() {
  return (
    <>
      <div className="border-2 border-red-500 w-[43rem] h-[40rem]">
        <Control_panel />
      </div>
    </>
  );
}
export default App;
