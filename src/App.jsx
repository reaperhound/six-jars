import { useState } from "react";
import reactLogo from "./assets/react.svg";
import moneySvg from "/money.svg";
import { useEffect } from "react";

function App() {
  const [inputAmount, setInputAmount] = useState(0);

  const jars = [
    { name: "Utilities", percentage: 0.55 },
    { name: "Long-Term", percentage: 0.15 },
    { name: "Short Term", percentage: 0.1 },
    { name: "Financial Freedom", percentage: 0.08 },
    { name: "Giving", percentage: 0.05 },
    { name: "Play", percentage: 0.07 },
  ];

  console.log({ inputAmount });

  return (
    <div className="w-[100vw] lg:h-[100vh] md:h-[100vh] h-[110vh] lg:pb-0 md:pb-0 pb-10 grid grid-cols-1 lg:grid-rows-3 md:grid-rows-3 grid-rows-4">
      {/* Title */}
      <div className="grid grid-rows-3 grid-cols-3 ">
        <h1 className="h text-5xl text-secondary md:row-start-2 md:row-end-2 md:col-start-2 md:col-end-2 row-start-2 col-start-1 col-end-4  flex justify-center">
          Six Jars
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center lg:gap-15 md:gap-15 gap-5 lg:row-start-2 lg:row-end-2 md:row-start-2 md:row-end-2 row-start-2 row-end-5 ">
        {/* Input  */}
        <div className="flex gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="number"
              className="no-arrows input input-bordered w-full max-w-xs"
              placeholder="Enter Amount"
              value={inputAmount}
              onChange={(val) => setInputAmount(val.target.value)}
            />
          </label>
        </div>

        {/* Values */}
        <div className="w-[100%] h-full grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 gap-6 place-items-center">
          {jars.map((val, index) => (
            <div key={index} className=" w-2/3">
              <p>{val.name}</p>
              <button className="btn btn-outline w-[100%] bg-primary text-primary-content mt-2">
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
