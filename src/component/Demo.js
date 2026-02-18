import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils.js/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   const num = findNthPrime(text);
  const num = useMemo(() => findNthPrime(text), [text]);
  const handleClickMe = function () {
    setIsDarkTheme(() => !isDarkTheme);
  };
  return (
    <div
      className={
        "mt-5 ml-14 border border-black w-96 p-4 h-48 " +
        (isDarkTheme ? "bg-gray-800 text-white " : "bg-gray-200 text-black")
      }
    >
      <div>
        <input
          className={"p-2 text-black"}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClickMe}>Click me</button>
      </div>
      <div className="mt-3 ">
        <p>Prime num:{num} </p>
      </div>
    </div>
  );
};

export default Demo;
