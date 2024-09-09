import { useState } from "react";
import reactLogo from "./assets/react.svg";
import moneySvg from "/money.svg";
import { useEffect } from "react";

function App() {
  const [inputAmount, setInputAmount] = useState(0);

  const [jars, setJars] = useState([
    { name: "Utilities", percentage: 0.55 },
    { name: "Long-Term", percentage: 0.15 },
    { name: "Short Term", percentage: 0.1 },
    { name: "Financial Freedom", percentage: 0.08 },
    { name: "Giving", percentage: 0.05 },
    { name: "Play", percentage: 0.07 },
  ]);

  console.log({ inputAmount });

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="h-1/3 w-2/3 flex flex-col justify-start items-center gap-[20%]">
        {/* Input  */}
        <div className="flex gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              className="no-arrows"
              placeholder="Enter Amount"
              value={inputAmount}
              onChange={(val) => setInputAmount(val.target.value)}
            />
          </label>
          {/* <button className="btn btn-outline btn-secondary">Split</button> */}
        </div>

        {/* Values */}
        <div className="w-[100%] h-full grid grid-cols-3 grid-rows-2 gap-[10%]">
          {jars.map((val, index) => (
            <div key={index}>
              <p>{val.name}</p>
              <button className="btn btn-outline w-[100%] btn-info mt-2">
                {Math.floor(+inputAmount * val.percentage)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
