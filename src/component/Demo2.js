import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div className="mt-5 ml-14 border border-black w-96 p-4 h-48 flex flex-col gap-2">
      <div className="flex gap-3">
        <button
          className="bg-gray-300 p-2"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase X
        </button>
        <h1 className="font-bold text-xl">let = {x}</h1>
      </div>

      <div className="flex gap-3">
        <button
          className="bg-gray-300 p-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <h1 className="font-bold text-xl">State = {y}</h1>
      </div>

      <div className="flex gap-3">
        <button
          className="bg-gray-300 p-2"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increase Ref
        </button>
        <h1 className="font-bold text-xl">Ref = {ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
