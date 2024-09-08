import { useState } from "react";
import reactLogo from "./assets/react.svg";
import moneySvg from "/money.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="h-1/3 w-2/3 flex flex-col justify-start items-center gap-[20%]">
        {/* Input  */}
        <div className="flex gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Enter Amount" />
          </label>
          <button className="btn btn-outline btn-secondary">Split</button>
        </div>

        {/* Values */}
        <div className="w-[100%] grid grid-cols-3 grid-rows-2 gap-[25%] ">
          {[1, 2, 3, 4, 5, 6].map((val, key) => (
            <button className="btn btn-outline btn-info">{val * 1000}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
